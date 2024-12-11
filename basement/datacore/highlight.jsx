
const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
};

const Highlight = ({ content, filter }) => {
    if (!filter) return content;

    const regex = new RegExp(`(${escapeRegExp(filter)})`, 'gi');

    const highlightText = (text) => {
        const parts = text.split(regex);
        return parts.map((part, index) => {
            if (index % 2 === 0) return <span key={index}>{part}</span>;
            return <mark key={index}>{part}</mark>;
        });
    };

    const highlightVNode = (vnode) => {
        if (typeof vnode === 'string') {
            return highlightText(vnode);
        }

        if (Array.isArray(vnode)) {
            return vnode.map((child, index) => (
                <span key={index}>{highlightVNode(child)}</span>
            ));
        }

        if (vnode.props && vnode.props.children) {
            const children = highlightVNode(vnode.props.children);
            return dc.preact.h(vnode.type, { ...vnode.props, children });
        }

        return vnode; // Return the VNode as is if it doesn't match the above cases
    };

    return highlightVNode(content);
};

return  { Highlight };