const { Link } = await dc.require('basement/datacore/Link.jsx');

const Heading = ({ level, children }) => {
    const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    if (level < 1) {
        level = 1;
    }
    else if (level > 6) {
        level = 6;
    }

    const Tag = headingTags[level - 1];
    return <Tag >
        <dc.Icon className="heading-collapse-indicator collapse-indicator collapse-icon" icon="right-triangle"/>{children}</Tag>;
};

const Section = ({ level, title, children }) => {
    const t = `heading${level}`;
    return <dc.Callout title={title} type={t}>
        {children}
    </dc.Callout>;

};


const NoteListItem = ({note}) => {
    return (
        <li>
            <Link path={note.$path}>{note.value("title")}</Link>: {note.value("description")}
        </li>
    );
}

const NotesByCategory = ({category, type}) => {
    const query = `@page and !startswith($path, "basement") and type="${type}" and categories`
    const data = dc.useQuery(query);
    const data1 = data.filter(p => { 
        let categories = p.value("categories");
        categories = Array.isArray(categories) ? categories : [categories];
        return categories.some(cat => cat.path === category.$path)});
    if(data1.length == 0)
        return null;
    return (
        <ul>
            {data1.map(s => <NoteListItem note={s}/>)}
        </ul>
    )
};

const Category = ({type}) => {
    const currentFile = dc.useCurrentFile();
    return (
        <Section level={1} title={currentFile.$name}>
            <SubCategoriesList category={currentFile} level={2} type={type}/>
        </Section>
    )
};

const Categories = () => {
    const data = dc.useQuery('@page and !startswith($path, "basement") and type="category" and !parent');
//                    <Heading level={2}><span>{s.$name}</span><Link path={s.$path}><dc.Icon icon="link"/></Link></Heading>
    return (
        <div>
            {data.map(s => (
                <Section level={2} title={<Link path={s.$path}>{s.$name}</Link>}>
                    <SubCategoriesList category={s} level={3}/>
                </Section>
            ))}
        </div>
    )
    return null;
};

const SubCategoriesList = ({category, level, type=null}) => {
    const query = `@page and type="category" and parent and contains(parent, link("${category.$path}"))`
    //const query = `@page and type="category" and parent and parent.path = "${category.$path}"`
    const data = dc.useQuery(query);
    //<Heading level={level}><span>{s.$name}</span><Link path={s.$path}><dc.Icon icon="link"/></Link></Heading>
    return (<div>
        <div>
            {data.map(s => (
                <Section level={level} title={<Link path={s.$path}>{s.$name}</Link>}>
                    <SubCategoriesList category={s} level={level + 1} type={type}/>
                </Section>
            ))}
        </div>
        {type && <NotesByCategory category={category} type={type}/>}
    </div>)
};


return {NotesByCategory, Category, Categories, SubCategoriesList}

