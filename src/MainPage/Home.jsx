import React from 'react'
import Layout from './Layout'
import Sec1 from './HomeComponent/Sec1';
import { Sec2 } from './HomeComponent/Sec2';
import { Sec3 } from './Sec3';
import { Sec4 } from './Sec4';
import { Sec5 } from './Sec5';
import { Sec6 } from './Sec6';
import { Sec7 } from './Sec7';

const Home = () => {
  return (
    <Layout>
          {/* homebanner */}
           <Sec1/>
           {/* home about sec */}
           <Sec2/>
           {/* product sec */}
           <Sec3/>
           {/* video sec */}
           <Sec4/>
           {/* number sec */}
           <Sec5/>
           {/* our prodct */}
           <Sec6/>
           {/* country */}
           <Sec7/>
    </Layout>
  )
}

export default Home;