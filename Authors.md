```datacorejsx
const { Link } = await dc.require('basement/datacore/Link.jsx');
const { IndexTable } = await dc.require('basement/datacore/index_table.jsx');

const PluginsList = ({rows}) => {
    return (
       <ol>
         {rows.map(s => (
            <li>
              <Link path={s.$path}>{s.value("title")}</Link>
            </li>
        ))}
       </ol>
    )
}

const NoteName = (path) => {
    const pathEnd = path.lastIndexOf('/');
    return path.slice(pathEnd + 1, path.lastIndexOf('.'));
}

return function View() {
    const plugins = dc.useQuery(`@page and type="plugin"`);
    const authors = dc.useQuery(`@page and type="author"`);
    const COLUMNS1 = [
        {
            field: "author",
            title: "Author",
            value: (page) => page.value("name") || NoteName(page.$file),
            render: (n, p) => <Link path={p.$path}>{n}</Link>,
            sortable: true
        },
        {
            field: "plugins",
            title: "Plugins",
            value: (page) => {
                const ret = plugins.filter((p) => {
                   let authors = p.value("author");
                   authors = Array.isArray(authors) ? authors : [authors];
                   return authors.some(a => a.path === page.$path)
                });
                return ret;
            },
            render: (n, p) => <PluginsList rows={n}/>,
            sortable: false
        }
      ];
    return <IndexTable id={"authors_index"} columnsConfig={COLUMNS1} search_fields={["author"]} rows={authors} paging={10}/>
}
```