```datacorejsx
const { Categories } = await dc.require('basement/datacore/categories.jsx');

return <Categories/>;
```

## Uncategorized plugins

```datacorejsx
const { Link } = await dc.require('basement/datacore/Link.jsx');

function View() {
    const data = dc.useQuery('@page and !startswith($path, "basement") and type = "plugin" and !categories');
    const COLUMNS = [
        { 
            id: "Plugin",
            value: (page) => <div><Link path={page.$path}>{page.value("title")}</Link><br/><small>{page.value("description")}</small></div>
        }
    ]
    return <dc.VanillaTable columns={COLUMNS} rows={data} paging={10}/>
}
return <View />;
```