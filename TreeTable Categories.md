## Categories

```datacorejsx
const { TreeRelation } = await dc.require('basement/datacore/treedata.js');
const { Link } = await dc.require('basement/datacore/Link.jsx');

function View() {
    relation = new TreeRelation("category", "categories", "parent");
    COLUMNS= [
        {
            title: "Name",
            value: (r) => r.page.$name,
            sortable: true,
            render: (v, p) => <span>🗀 <Link path={p.page.$path}>{v}</Link></span>
        }
    ];
    const roots = relation.roots;
    return <dc.TreeTable columns={COLUMNS} rows={roots} childSelector = {(r) => r.children} id={(r) => r.page.$id}/>
}
return <View/>
```

