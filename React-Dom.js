export function render(reactElement, rootElement) {
    function createDomElement(reactElement) {

      if(Array.isArray(reactElement)) {
          return reactElement.map((singleReactElement)=> createDomElement(singleReactElement))
      }
  
      if(typeof reactElement === "string") {
          const textNode = document.createTextNode(reactElement)
          return textNode
      }
  
      if(reactElement && typeof reactElement.type === "function") {
          return createDomElement(reactElement.type(reactElement.props))
      }
  
  
      if(reactElement) {
        const DomElement = document.createElement(reactElement.type)
      if(reactElement.props) {

          Object.entries(reactElement.props).forEach(([key, value ]) => {
            if(key === "style") {
                Object.entries(value).forEach(([style, prop])=> {
                    DomElement.style[style] = prop
                })
            } else DomElement[key] = value
          })

          reactElement.props.children.forEach((child)=> {
            if(Array.isArray(child)) {
                child.forEach((el)=> {
                    DomElement.append(createDomElement(el))
                })
            } else if(typeof child === "string") {
                  const textNode = document.createTextNode(child)
                  DomElement.append(textNode)
              }else if(typeof child === "number") {
                DomElement.append(child)
            }else {
                  const childElement = createDomElement(child)
                  DomElement.append(childElement)
              }
          })
      }
      return DomElement
      }
    }
    const DomElement = createDomElement(reactElement)
    rootElement.innerHTML = ""
    if(Array.isArray(DomElement)) {
  
        rootElement.append(...DomElement)
    } else {
  
        rootElement.append(DomElement)
    }
  
  }