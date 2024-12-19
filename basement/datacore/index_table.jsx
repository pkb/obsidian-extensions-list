const { Link } = await dc.require('basement/datacore/Link.jsx');
const { Highlight } = await dc.require('basement/datacore/highlight.jsx');
const { useLocalStorage } = await dc.require('basement/datacore/hooks.jsx');

const IndexTable = ({ id, columnsConfig, search_fields, rows, groupBy, paging }) => {
    const [sortConfig, setSortConfig] = useLocalStorage(`${id}_sortConfig`, { key: null, direction: 'asc' });
    const [filter, setFilter] = useLocalStorage(`${id}_filter`, "");
    
    const Header = ({ field, children }) => {
        return (
            <span onClick={() => handleSort(field)}>
               {children}
               {getSortIndicator(field)}
            </span>
        );
    }

    const handleSearch = (inputEvent) => {
        setFilter(inputEvent.target.value);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortIndicator = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
        }
        return '';
    };

    const page_value = (f) => {
        return (page) => page.value(f);
    }

    let value_funcs = {};
    const COLUMNS = columnsConfig.map((c) => {
        let render = undefined;
        let value = c["value"];
        const f = c["field"];
        if(!value) {
            value = (page) => page.value(f);
        }
        value_funcs[f] = value;
        if(search_fields.includes(f)) {
            if(c["render"])
                render = (name, page) => {
                    const content = c.render(name, page);
                    return <Highlight content={content} filter={filter}/>
                }
            else
                render = (name, page) => {
                    const content = value(page);
                    return <Highlight content={content} filter={filter}/>
                };
        } else 
            render = c["render"];
        return {
           id: f,
           title: c["sortable"] ? <Header field={c["field"]}>{c["title"]}</Header> : c["title"],
           value: value,
           render: render,
           width: c["width"],
        };
    });

    const filteredAndSortedPages = dc.useMemo(() => {
        let filtered = rows;

        if (filter) {
            filtered = rows.filter((page) => {
                return search_fields.some((f) => {
                    const vf = value_funcs[f] || page_value(f);
                    return vf(page).toLowerCase().includes(filter.toLowerCase());
                });
            });
        }

        if (sortConfig.key) {
            const vf = value_funcs[sortConfig.key] || page_value(sortConfig.key);
            filtered = [...filtered].sort((a, b) => {
                const aValue = vf(a);
                const bValue = vf(b);

                let ret = 0;
                if(aValue < bValue)
                    ret = -1;
                else if (aValue > bValue)
                    ret = 1;
                return sortConfig.direction === 'asc' ? ret : -ret;            
            });
        }
        if(groupBy) {
            filtered = dc.useArray(filtered, array => {
                return array.groupBy(p => groupBy(p));
            });
        }
        return filtered;
    }, [rows, filter, sortConfig]);

    return (
        <>
            <dc.Group className="search-input-container">
                <input enterkeyhint="search" type="search" value={filter} onChange={handleSearch}/>{filter && (<div className="search-input-clear-button" aria-label="Clear search" onClick={() => setFilter("")}/>)}
            </dc.Group>
            <dc.VanillaTable columns={COLUMNS} rows={filteredAndSortedPages} paging={paging}/>
        </>
    );
}

return { IndexTable };