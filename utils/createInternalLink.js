
const createInternalLink = (link, basePath) => {
  if (process.env.NODE_ENV == "development") {
    return `${basePath}/${link}`
  } else {
    return `/${link}`
  }
};

export default createInternalLink;
