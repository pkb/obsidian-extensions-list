class Note
{
    constructor(page) {
        this._page = page;
    }

    get page() {
        return this._page;
    }

    get children() {
        return [];
    }

    is_leaf() {
        return true;
    }
}

class TreeItem extends Note
{
    constructor(page, relation) {
        super(page);
        this.relation = relation
    }

    get children() {
        return this.relation.getChildren(this)
    }

    is_leaf() {
        return false;
    }
};

class TreeRelation
{
    constructor(type_, field, parent_field, showNotes) {
        this.type_ = type_;
        this.field = field;
        this.parent_field = parent_field;
        this.allItems = this.getAllItems();
        this.allNotes = showNotes ? this.getAllNotes() : []
    }

    get roots() {
        const topItems = this.allItems.filter((c) => {
            return !c.value(`${this.parent_field}`);
        });
        return topItems.map((i) => new TreeItem(i, this));
    }

    getChildren(item) {
        const data = this.allItems.filter((c) => {
            return c.value(`${this.parent_field}`)?.path === item._page.$path;
        });
        let ret = data.map(c => new TreeItem(c, this));
        const notes = this.getItemNotes(item.page);
        if (notes.length > 0) {
            ret = ret.concat(notes.map((n) => new Note(n)));
        }
        return ret;
    }
    
    getAllItems() {
        const query = `@page and !startswith($path, "basement") and type="${this.type_}"`
        return dc.useQuery(query);
    }
   
    getAllNotes() {
        const query = `@page and !startswith($path, "basement") and ${this.field} and type != "category" and type != "author"`;
        return dc.useQuery(query);
    }
    
    getItemNotes(category) {
        const notesWithCategory = this.allNotes.filter(p => { 
            let categories = p.value(this.field);
            categories = Array.isArray(categories) ? categories : [categories];
            return categories.some(cat => cat.path === category.$path)
        });
        return notesWithCategory;
    }
}

return { TreeItem, TreeRelation}
