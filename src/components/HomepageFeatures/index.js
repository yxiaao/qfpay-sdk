import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import HomeCard from '../HomepageCard';

const FeatureList = [
  {
    title: 'In-Store',
    Svg: '/qfpay-sdk/img/in-store.png',
    description: (
      <>
        Experience swift, secure shopping with our in-store payment solution. Accepts all major cards and e-wallets. Quick, convenient, and crafted for you.
      </>
    ),
    links:[
      {title:"POS Integration", url:"/qfpay-sdk/docs/category/cdi"},
      {title:"In-Store common API -MPQR & CPQR", url:"/docs/category/cdi"}
    ]
  },
  {
    title: 'Online Shop',
    Svg: '/qfpay-sdk/img/online-shop.png',
    description: (
      <>
        Enjoy secure, instant online payments with our solution. Supports all major online scenarios and e-wallets / credit cards. Fast, flexible, and designed for your convenience.
      </>
    ),
    links:[
      {title:"Checkout Services", url:"/qfpay-sdk/docs/category/cdi"},
      {title:"Embedded Component", url:""},
      {title:"Recurring Payment", url:""},
      {title:"Official Accounts/ Mini Programs", url:""}
    ]
  },
  {
    title: 'E-Commerce',
    Svg: '/qfpay-sdk/img/e-commerce.png',
    description: (
      <>
        Boost your online store payment abilities with our e-commerce plugins for Shopify, WooCommerce, OpenCart, and Magento. Easy to integrate, reliable, and designed to enhance your business.
      </>
    ),
    links:[
      {title:"POS Integration", url:"/qfpay-sdk/docs/category/cdi"}
    ]
  },
];

function Feature({Svg, title, description, links}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h4">{title}</Heading>
        <p style={{textAlign: "left"}}>{description}</p>
        <ul>
          {links.map((item,index) => {
            console.log(index, item);
            return <li style={{textAlign: "left"}} key={index}><a href={item["url"]} target="_self">{item["title"]}</a></li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            // <Feature key={idx} {...props} />
            <HomeCard key={idx} url={props.Svg} title={props.title} description={props.description}/>
          ))}
        </div>
      </div>
    </section>
  );
}
