const { Link } = await dc.require('basement/datacore/Link.jsx');
const { TreeView } = await dc.require('basement/datacore/treeview.jsx');
const { TreeItem, TreeRelation } = await dc.require('basement/datacore/treedata.js');

const Node_render = ({node}) => {
    return (
        <span style={{ display: "inline-flex", flexDirection: "column", marginLeft: '5px', maxWidth: '450px'}}>
            {node.is_leaf() ? (
                <>
                    <Link path={node.page.$path}>{node.page.value("title")}</Link>
                    <small style={{ 
                        display: "block"
                    }}>
                        {node.page.value("description")}
                    </small>
                </>
            ) : (
                <Link path={node.page.$path}>{node.page.$name}</Link>       
            )}
        </span>
    );
}

const Category = ({type}) => {
    relation = new TreeRelation("category", "categories", "parent", true);
    currentFile = dc.useCurrentFile();
    category = new TreeItem(currentFile, relation);
    const notes = relation.getCategoryNotes(currentFile);
    let relatedCategories = new Map();
    notes.forEach((note) => {
        let categories = note.value("categories");
        categories = Array.isArray(categories) ? categories : [categories];
        categories.forEach((cat) => {if(cat.path != currentFile.$path) relatedCategories.set(cat.path, cat)})
    });
    const array = Array.from(relatedCategories.values());
    return (
        <>
            <TreeView data={[category]} initial_open={true} node_render={Node_render}/>
            {array.length > 0 && <div>
                <h2>Related categories:</>
                <ul>
                  {array.map(s => <li><dc.Link link={s}/></li>)}
                </ul>
            </div>}
        </>
    )
};

const Categories = () => {
    relation = new TreeRelation("category", "categories", "parent", false);

    return <TreeView data={relation.roots} initial_open={true}/>;
};

return {Category, Categories}

