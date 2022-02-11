import './App.css';

import Header from './components/Header/header';
import Card from './components/cards/cards';

function App() {

  let ads = [
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/04022022/17169_550_1642594272_61e7ffe0324a4-1433518224828.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/04022022/17170_172_1642594212_61e7ffa461ef2-191268401789.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/04022022/17171_354_1642594396_61e8005c02400-346265226491.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/31012022/17026_580_1642411090_61e5345203f53-1381580745754.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/31012022/14802_264_1639996516_61c05c64cc50c-14481598022.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/31012022/14796_961_1639996411_61c05bfbb194d-350017942133.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/31012022/14791_769_1639997872_61c061b009558-409286281403.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x686/31012022/14789_157_1639997033_61c05e691fa6a-753993463050.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/400x400/05102021/59_1633343737_615ad8f972c68_FW8194_1-1055027369636.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/400x400/05102021/829_1633343814_615ad94644815_FX1681_1-1436325080425.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/400x400/05102021/121_1633343619_615ad88341c96_FU8415_1-1043134320494.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    },
    {
      url: 'https://d30fs77zq6vq2v.cloudfront.net/product/400x400/05102021/6_1633343752_615ad90844bfd_FX0142_1-199216593750.jpg',
      brand: 'MOVE',
      price: 'Rs 15,000',
      title: 'CCTV Package',
    }
  ]

  return <div>
    <Header />
    <div className='lineBar'>
      <h4 className='textCenter'>Sports Shoes</h4>
    </div>
    <div className="ad-container">
      {ads.map((adItem) => {
        return <Card mydata={adItem} />;
      })}
    </div>
  </div>
}

export default App;
