module.exports = (config) => {
    //  Passthrough the uploads folder used by forestry
    config.addPassthroughCopy('uploads');
  
    //  Passthrough the assets folder used for our css, favicon and other assets
    config.addPassthroughCopy('assets');
  
    //  Configure our money filter so the price will be properly displayed
    config.addFilter('money', function (value) {
      const formatter = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency',
      });
  
      return formatter.format(value);
    });
  
    //  Change the default folder used by 11ty from root to src
    return {
      dir: {
        input: 'src',
      },
      pathPrefix: "/shop/"
    };
  };