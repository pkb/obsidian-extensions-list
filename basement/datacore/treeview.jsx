const { Link } = await dc.require('basement/datacore/Link.jsx');

const Default_node_render = ({node}) => {
    return <Link path={node.page.$path}>{node.page.$name}</Link>
}

const TreeNode = ({ node, initial_open, node_render}) => {
  const [isOpen, setIsOpen] = dc.useState(initial_open);
  const children = dc.useMemo(() => node.children, [node]);
  const hasChildren = children.length > 0;
  const Node = node_render;
      
  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };


  return (
      <div className="tree-node">
        <span className="tree-node-toggle" onClick={e => handleToggle(e)}>{node.is_leaf() ? "🖹" : isOpen ? "🗁" : "🗀"}</span>
        <Node node={node}/>
        {hasChildren && isOpen && (
          <div className="tree-children">
            {children.map((childNode, index) => (
               <TreeNode key={index} node={childNode} initial_open={initial_open} node_render={Node}/>
             ))}
          </div>
        )}
    </div>
  );
};

const TreeView = ({ data, initial_open, node_render=Default_node_render}) => {
  return (
    <div className="tree-view">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} initial_open={initial_open} node_render={node_render}/>
      ))}
    </div>
  );
};


return { TreeView }
