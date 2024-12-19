
```datacorejsx
const query = `@page and type="plugin"`;

const { Link } = await dc.require('basement/datacore/Link.jsx');
const { IndexTable } = await dc.require('basement/datacore/index_table.jsx');

function View() {
    const pages = dc.useQuery(query);
    
    const COLUMNS = [
        { 
            field: "number",
            title: "#",
            sortable: true
        },
        { 
            field: "title",
            title: "Plugin",
            render: (n, p) => <div><Link path={p.$path}>{p.value("title")}</Link><br/><small>{p.value("description")}</small></div>,
            width: "50%",
            sortable: true,
        },
        { 
            field: "mobile",
            title: <dc.Icon icon="smartphone" className="icon"/>, 
            render: (n, p) => <dc.Checkbox checked={p.value("mobile")} disabled={true}/>,
            sortable: true
        },
        {
            field: "stars",
            title: <dc.Icon icon="star" className="icon"/>, 
            sortable: true
        },
        {
            field: "downloads",
            title: <dc.Icon icon="cloud-download" className="icon"/>, 
            sortable: true,
            width: "15%"
        },
        {
            field: "updated",
            title: "Updated", 
            render: (n, p) => p.value("updated").toRelative(),
            sortable: true
        }
    ];
    return <IndexTable id={"main_index"} columnsConfig={COLUMNS} search_fields={["title", "description"]} rows={pages} paging={10}/>
}

return <View/>;
```

