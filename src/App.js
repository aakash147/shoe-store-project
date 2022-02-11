import './App.css';

import Header from './components/Header/header';
import Card from './components/cards/cards';

function App() {

  let ads = [
    {
      location: 'Ahmed',
      time: '3 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/04022022/17169_550_1642594272_61e7ffe0324a4-1433518224828.jpg',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      location: 'Lahore',
      time: '2 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/04022022/17170_172_1642594212_61e7ffa461ef2-191268401789.jpg',
      price: 'Rs 6,000',
      title: 'Rings',
    },
    {
      location: 'Faisalabad',
      time: '1 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/04022022/17171_354_1642594396_61e8005c02400-346265226491.jpg',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      location: 'Faisalabad',
      time: '1 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/31012022/17026_580_1642411090_61e5345203f53-1381580745754.jpg',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      location: 'Lahore johar town',
      time: '2 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/31012022/14802_264_1639996516_61c05c64cc50c-14481598022.jpg',
      price: 'Rs 12,000',
      title: 'I-Phone Air pods',
    },
    {
      location: 'Karachi',
      time: '4 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/31012022/14796_961_1639996411_61c05bfbb194d-350017942133.jpg',
      price: 'Rs 27,000',
      title: 'HP Laptop',
    },
    {
      location: 'Karachi',
      time: '4 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/31012022/14791_769_1639997872_61c061b009558-409286281403.jpg',
      price: 'Rs 27,000',
      title: 'HP Laptop',
    },
    {
      location: 'Karachi',
      time: '4 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/31012022/14789_157_1639997033_61c05e691fa6a-753993463050.jpg',
      price: 'Rs 27,000',
      title: 'HP Laptop',
    },
    {
      location: 'Karachi',
      time: '4 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/400x400/05102021/59_1633343737_615ad8f972c68_FW8194_1-1055027369636.jpg',
      price: 'Rs 27,000',
      title: 'HP Laptop',
    },
    {
      location: 'Karachi',
      time: '4 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/400x400/05102021/829_1633343814_615ad94644815_FX1681_1-1436325080425.jpg',
      price: 'Rs 27,000',
      title: 'HP Laptop',
    },
    {
      location: 'Karachi',
      time: '4 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/400x400/05102021/121_1633343619_615ad88341c96_FU8415_1-1043134320494.jpg',
      price: 'Rs 27,000',
      title: 'HP Laptop',
    },
    {
      location: 'Karachi',
      time: '4 WEEKS AGO',
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/400x400/05102021/6_1633343752_615ad90844bfd_FX0142_1-199216593750.jpg',
      price: 'Rs 27,000',
      title: 'HP Laptop',
    }
  ]

  return <div>
    <Header />
    <div className="ad-container">
      {ads.map((adItem) => {
        return <Card mydata={adItem} />;
      })}
    </div>
  </div>
}

export default App;
