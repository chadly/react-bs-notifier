import { create }  from "jss";
import jssExtend from "jss-extend";
import jssNested from "jss-nested";
import jssCamelCase from "jss-camel-case";
import jssDefaultUnit from "jss-default-unit";
import jssVendorPrefixer from "jss-vendor-prefixer";

const jss = create();

import reactJss from "react-jss";

jss.use(jssExtend());
jss.use(jssNested());
jss.use(jssCamelCase());
jss.use(jssDefaultUnit());
jss.use(jssVendorPrefixer());

export default reactJss(jss);