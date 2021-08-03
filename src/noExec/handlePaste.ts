const stringToHTML = (str: string) => {
  const dom = document.createElement('div');
  dom.innerHTML = str;
  return dom;
};

const reduceHTML = (str: string) => {
  const div = stringToHTML(str);
  return Array.from(div.childNodes).reduce<Array<any>>((acc: Array<any>, el: any) => {
    if (!el.tagName) return acc;
    const tag = el.tagName.toLowerCase();
    if (tag === 'span') {
      if (el.getAttribute('data-code')) acc.push(el);
      else if (el.firstChild) acc.push(el.firstChild.data);
    } else if (tag === 'div' && el.childNodes.length !== 0) acc.push(el);
    return acc;
  }, []);
};

export const handlePasteEvent = (e: ClipboardEvent) => {
  const str = e.clipboardData?.getData('text/html') || '';
  reduceHTML(str);
};

const handlePaste = () => {
  navigator.permissions.query({ name: 'clipboard-read' }).then((result) => {
    if (result.state === 'granted' || result.state === 'prompt') {
      const nav:any = navigator;
      nav.clipboard.read().then((data:any) => {
        data[0].getType('text/html')
          .then((blob:Blob) => blob.text())
          .then((text: string) => {
            // reduceHTML(text);
            document.execCommand('insertHTML', false, text);
          });
      });
    }
  });
};

export default handlePaste;
