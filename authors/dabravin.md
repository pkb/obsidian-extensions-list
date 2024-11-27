---
aliases:
- Ivaylo Dabravin <ivaylo.dabravin@gmail.com>
name: Ivaylo Dabravin <ivaylo.dabravin@gmail.com>
type: author
url: https://github.com/dybrawin/obsidian-dynamic-embed
---


%% WORKS_LIST_START %%

```datacorejsx
const { AuthorWorks } = await dc.require('basement/datacore/authors.jsx');
return function View() {
    return <AuthorWorks/>
}
```
%% WORKS_LIST_END %%