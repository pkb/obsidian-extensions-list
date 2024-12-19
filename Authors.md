```datacorejsx
const { Link } = await dc.require('basement/datacore/Link.jsx');
const { IndexTable } = await dc.require('basement/datacore/index_table.jsx');

const COLUMNS = [
    {
        field: "author",
        title: "Author",
        value: (page) => { 
            const authors = page.value("author");
            if(authors) {
                const author = authors[authors.length - 1];
                return `${author.display} (${author.path.replace(".md", "").slice(8)})`;
            }
            return "None";
        }
    },
    { 
        field: "title",
        title: "Plugin",
        render: (n, p) => <div><Link path={p.$path}>{p.value("title")}</Link><br/><small>{p.value("description")}</small></div>,
        width: "50%",
    }
];

const groupBy = (page) => {
    const authors = page.value("author");
    if(authors) {
        return authors[authors.length - 1];
    }
    return "-";
}

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

const AuthorLink = ({page}) => {
    return <Link path={page.$path}>{page.value("name") || NoteName(page.$file)}</Link>
}

return function View() {
//    const pages = dc.useQuery(query);

//    return <IndexTable id={"authors_index"} columnsConfig={COLUMNS} search_fields={["author", "title", "description"]} rows={pages} groupBy={groupBy} paging={10}/>
    const plugins = dc.useQuery(`@page and type="plugin"`);
    const authors = dc.useQuery(`@page and type="author"`);
    const COLUMNS1 = [
        {
            field: "author",
            title: "Author",
            value: (page) => page.$file,
            render: (n, p) => <AuthorLink page={p}/>,//<dc.Link link={dc.fileLink(n)}/>,
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