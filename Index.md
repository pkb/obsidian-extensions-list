
```datacorejsx

// Based on a sample provided by boninall at discord
const query = `@page and type="plugin"`;

// Component by Saltmaker
const Link = ({ path, children }) => (
    <a target="_blank"
        rel="noopener"
        data-tooltip-position="top"
        data-href={path}
        class="internal-link">
        {children}
    </a>
);

const Highlight = ({ content, filter }) => {
    if (!filter) return content; 
    
    const regex = new RegExp(`(${escapeRegExp(filter)})`, 'gi'); 
    const parts = content.split(regex); 
    
    return parts.map((part, index) => { 
        if (index % 2 === 0) return <span>{part}</span>;
        return <mark key={index}>{part}</mark>; 
    });
};

const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$0');
};

function View() {
    const pages = dc.useQuery(query);
    const today = dc.luxon.DateTime.now();
    const [sortConfig, setSortConfig] = dc.useState({ key: "title", direction: 'asc' });
    const [filter, setFilter] = dc.useState("");
    const Header = ({ field, children }) => {
        return (
            <span onClick={() => handleSort(field)}>
               {children}
               {getSortIndicator(field)}
            </span>
        );
    }
    
const COLUMNS = [
    { 
        title: <Header field={"number"}>#</Header>, 
        value: (page) => page.value("number")
    },
    { 
        title: <Header field={"title"}>Plugin</Header>,
        value: (page) => <div><Link path={page.$path}><Highlight content={page.value("title")} filter={filter}/></Link><br/><small><Highlight content={page.value("description")} filter={filter}/></small></div>, 
        width: "50%"
    },
    { 
        title: <Header field={"mobile"}><dc.Icon icon="smartphone" className="icon" /></Header>, 
        value: (page) => <dc.Checkbox checked={page.value("mobile")} disabled={true}/>
    },
    { 
        title: <Header field={"downloads"}><dc.Icon icon="cloud-download" className="icon" /></Header>, 
        value: (page) => page.value("downloads"),
        width: "15%"
    },
    { 
        title: <Header field={"updated"}>Updated</Header>, 
        value: (page) => page.value("updated").toRelative()
    }
]

    const filteredAndSortedPages = dc.useMemo(() => {
        let filtered = pages;

        if (filter) {
            filtered = pages.filter((page) => {
                return page.value("title").toLowerCase().includes(filter.toLowerCase()) ||
page.value("description").toLowerCase().includes(filter.toLowerCase())
            });
        }

        if (sortConfig.key) {
            filtered = [...filtered].sort((a, b) => {
                const aValue = a.value(sortConfig.key);
                const bValue = b.value(sortConfig.key);

                let ret = 0;
                if(aValue < bValue)
                    ret = -1;
                else if (aValue > bValue)
                    ret = 1;
                return sortConfig.direction === 'asc' ? ret : -ret;            
            });
        }
        return filtered;
    }, [pages, filter, sortConfig]);

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

    return (
        <>
            <dc.Group justify="end">
                <input onChange={handleSearch} />
            </dc.Group>
            <dc.VanillaTable columns={COLUMNS} rows={filteredAndSortedPages} paging={10}/>
        </>
    );
}

return <View />;

```
