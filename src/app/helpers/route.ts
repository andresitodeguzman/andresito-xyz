import { URLPattern } from 'urlpattern-polyfill';

const routeHandler = (routeList) => {
    let page;
    routeList.forEach(elem => {
        if(elem.pattern !== "*") {
            let p = new URLPattern({ pathname: elem.pattern });
            const rd = p.exec(window.location.href);
            if(rd) {
                if(elem.redirectTo) {
                    window.location.replace(elem.redirectTo);
                } else {
                    page = `<page-${elem.name} data='${JSON.stringify(rd)}'></page-${elem.name}>`;
                }
            }
        }
    });
    return page;
};

export { routeHandler };