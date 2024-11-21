const { Link } = await dc.require('basement/datacore/Link.jsx');

const Heading = ({ level, children }) => {
    const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    if (level > 1) {
        level = 1;
    }
    else if (level > 6) {
        level = 6;
    }

    const Tag = headingTags[level - 1];

    return <Tag>{children}</Tag>;
};

const NotesByCategory = ({category, type}) => {
    const query = `@page and type="${type}" and categories`
    const data = dc.useQuery(query);
    const data1 = data.filter(p => { 
        let categories = p.value("categories");
        categories = Array.isArray(categories) ? categories : [categories];
        return categories.some(cat => cat.path === category.$link.path)});
    if(data1.length == 0)
        return null;
    return (
        <ul>
            {data1.map(s => (
                <li>
                    <dc.Link link={s.$link} />
                </li>
            ))}
        </ul>
    )
};

const Category = ({type}) => {
    const currentFile = dc.useCurrentFile();
    return (
        <div>
            <Heading level={1}>
                {currentFile.$name}
            </Heading>
            <SubCategoriesList category={currentFile} level={2} type={type} />
        </div>
    )
};

const Categories = () => {
    const data = dc.useQuery('@page and type="category" and !parent');
    console.log(data);
    return (
        <div>
            {data.map(s => (
                <div>
                    <Heading level={2}><span>{s.$name}</span><Link path={s.$link.path}><dc.Icon icon="link"/></Link></Heading>
                    <SubCategoriesList category={s} level={3}/>
                </div>
            ))}
        </div>
    )
};

const SubCategoriesList = ({category, level, type=null}) => {
    const data = dc.useQuery(`@page and type="category" and parent and parent.path="${category.$link.path}"`);
    return (<div>
        <div>
            {data.map(s => (
                <div>
                    <Heading level={level}><span>{category.$name}</span><Link path={category.$link.path}><dc.Icon icon="link"/></Link></Heading>
                    <SubCategoriesList category={s} level={level + 1} type={type}/>
                </div>
            ))}
        </div>
        {type && <NotesByCategory category={category} type={type}/>}
    </div>)
};


return {NotesByCategory, Category, Categories, SubCategoriesList}

