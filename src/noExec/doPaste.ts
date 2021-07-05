
const stringToHTML = function (str: string) {
      var dom = document.createElement('div');
      dom.innerHTML = str;
      console.log(str,dom)
      return dom;
    };
    
const doPaste = (e: React.ClipboardEvent) => {
    // Custom paste implementation started
    console.log(e);
    const el = stringToHTML(e.clipboardData.getData('text/html'));
    console.log(el.childNodes);
    console.log(Array.from(el.childNodes).reduce<Array<any>>((acc: Array<any>, el: any) => {
      if(!el.tagName) return acc;
      const tag = el.tagName.toLowerCase();
      if(tag === 'span'){
        if(el.className.startsWith('Jazzs')) acc.push(el);
        else if(el.firstChild) acc.push(el.firstChild.data);
      }
      else if(tag === 'div' && el.childNodes.length !== 0) acc.push(el);
      return acc;
    }, []))
    console.log(el.childNodes);
}

export default doPaste;
