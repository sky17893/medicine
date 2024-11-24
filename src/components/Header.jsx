import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const image = "https://jinyaksamall.com/web/upload/category/editor/2024/11/14/916ee063bf597ae476ce7cc6b5c20778.png"; //logo이미지
  const image2 = "https://jinyaksamall.com/web/upload/kdesign/ico/ic_hd_search.svg";
  const image3 = "https://jinyaksamall.com/web/upload/kdesign/ico/ic_hd_login.svg";
  const image4 = "https://jinyaksamall.com/web/upload/kdesign/ico/ic_hd_user.svg";
  const image5 = "https://jinyaksamall.com//web/upload/kdesign/ico/ic_hd_cart.svg";
  const image6 = "https://jinyaksamall.com/web/upload/kdesign/ico/ic_hd_menu.svg";

  const [isHovered, setIsHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearchSubmit = (e) => {
    //e.preventDefault();
    console.log('Search keyword:', keyword);	
  };

  const handleSearchClick = (e) => {
	
    //e.preventDefault();
    handleSearchSubmit(e);
    
    if (window.SEARCH_BANNER && typeof window.SEARCH_BANNER.submitSearchBanner === 'function') {
      window.SEARCH_BANNER.submitSearchBanner(e.target);	  
    }    
  };

  return (
    <div className="App">
            <div id="header" onMouseEnter={() => setIsHovered(false)}>
	<div className="kd-hd-group kd-contents">
		<div className="kd-hd-top kd-flex">			
			<h1 className="kd-logo">
			<Link to="/"><img src={image} alt="로고" /></Link>
			</h1>			
			<div className="kd-hd-search kd-flex">
				<form id="searchBarForm" name="" action="/" method="get" target="_self" onSubmit={handleSearchSubmit}>
					<input id="banner_action" name="banner_action" value="" type="hidden" />
					<div className="xans-element- xans-layout xans-layout-searchheader ">
						<fieldset className="kd-searc-box kd-flex">
							<label htmlFor="keyword" className="ePlaceholder" title="검색어를 입력해주세요..."><input id="keyword" name="keyword" fw-filter="" fw-label="검색어" fw-msg="" className="inputTypeText" placeholder="검색어를 입력해주세요..." value={keyword} type="text" onChange={handleInputChange} /></label><input className="ico_search" type="image" src={image2} alt="" onClick={handleSearchClick}/>
							<ul className="autoDrop" id="">
							</ul>
						</fieldset>
					</div>
				</form>
				{/*<div className="xans-element- xans-search xans-search-hotkeyword kd-search-keyword">
					<div className="kd-flex">
						<h2>인기검색어</h2>
						<div className="swiper-container kd-slow swiper-initialized swiper-vertical swiper-pointer-events swiper-backface-hidden">
							<ul id="keyword_swiper" className="swiper-wrapper" aria-live="off">
								<li className="xans-record- swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="4" role="group" aria-label="5 / 5"><Link to="/?keyword=일반의약품"><span className="rank">5</span><span className="keyword">일반의약품</span></Link></li>
								<li className="xans-record- swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" role="group" aria-label="1 / 5"><Link to="/?keyword=비타민B"><span className="rank">1</span><span className="keyword">비타민B</span></Link></li>
								<li className="xans-record- swiper-slide" data-swiper-slide-index="1" role="group" aria-label="2 / 5"><Link to="/?keyword=비타민C"><span className="rank">2</span><span className="keyword">비타민C</span></Link></li>
								<li className="xans-record- swiper-slide" data-swiper-slide-index="2" role="group" aria-label="3 / 5"><Link to="/?keyword=오메가3"><span className="rank">3</span><span className="keyword">오메가3</span></Link></li>
								<li className="xans-record- swiper-slide" data-swiper-slide-index="3" role="group" aria-label="4 / 5"><Link to="/?keyword=콜라겐"><span className="rank">4</span><span className="keyword">콜라겐</span></Link></li>
								<li className="xans-record- swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="4" role="group" aria-label="5 / 5"><Link to="/?keyword=일반의약품"><span className="rank">5</span><span className="keyword">일반의약품</span></Link></li>
								<li className="xans-record- swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" role="group" aria-label="1 / 5"><Link to="/?keyword=비타민B"><span className="rank">1</span><span className="keyword">비타민B</span></Link></li>
							</ul>
							<span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
						</div>
					</div>
					<div className="kd-keyword-list">
						<ul id="keyword_list">
							<li className="xans-record-"><Link to="/?keyword=비타민B"><span className="rank">1</span><span className="keyword">비타민B</span></Link></li>
							<li className="xans-record-"><Link to="/?keyword=비타민C"><span className="rank">2</span><span className="keyword">비타민C</span></Link></li>
							<li className="xans-record-"><Link to="/?keyword=오메가3"><span className="rank">3</span><span className="keyword">오메가3</span></Link></li>
							<li className="xans-record-"><Link to="/?keyword=콜라겐"><span className="rank">4</span><span className="keyword">콜라겐</span></Link></li>
							<li className="xans-record-"><Link to="/?keyword=일반의약품"><span className="rank">5</span><span className="keyword">일반의약품</span></Link></li>
						</ul>
					</div>
					<div className={`kd-keyword-list ${isHovered ? 'selected' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
						<ul id="keyword_list">
							<li className="xans-record-"><Link to="/?keyword=비타민B"><span className="rank">1</span><span className="keyword">비타민B</span></Link></li>
							<li className="xans-record-"><Link to="/?keyword=비타민C"><span className="rank">2</span><span className="keyword">비타민C</span></Link></li>
							<li className="xans-record-"><Link to="/?keyword=오메가3"><span className="rank">3</span><span className="keyword">오메가3</span></Link></li>
							<li className="xans-record-"><Link to="/?keyword=콜라겐"><span className="rank">4</span><span className="keyword">콜라겐</span></Link></li>
							<li className="xans-record-"><Link to="/?keyword=일반의약품"><span className="rank">5</span><span className="keyword">일반의약품</span></Link></li>
						</ul>
					</div>
				</div>*/}
			</div>
			<ul className="kd-log-wrap kd-flex">
			    <li><Link to="/" className="xans-element- xans-layout xans-layout-orderbasketcount kd-ic-cart ">건강상식/약품정보/오남용</Link></li>
				<li className="xans-element- xans-layout xans-layout-statelogoff "><Link to="/" className="kd-ic-log"><img src={image3} alt="로그인하기" />로그인</Link>
				</li>
				<li><Link to="/MyPage" className="kd-ic-my"><img src={image4} alt="마이페이지로 이동" />마이페이지</Link></li>
				{/*<li><Link to="/" className="xans-element- xans-layout xans-layout-orderbasketcount kd-ic-cart "><span className="count displaynone EC-Layout_Basket-count-display"><span className="EC-Layout-Basket-count">0</span></span>
				<img src={image5} alt="장바구니"/>
				장바구니 </Link>
				</li>*/}
			</ul>
		</div>
		<div className="kd-hd-btm">			
			<div className="kd-gnb">			
				<ul className="kd-cate-direct kd-flex">
					<li className="kd-ham" onMouseEnter={() => setIsHovered(true)}><Link to="#none"><img src={image6} alt="햄버거 메뉴"/>전체 카테고리</Link></li>
					<li>
					<ul className="kd-flex">
						<li><Link to="/">홈</Link></li>
						<li><Link to="/">전체상품</Link></li>
						<li><Link to="/">베스트</Link></li>
						<li><Link to="/">신제품</Link></li>
						<li><Link to="/">상품후기</Link></li>
						{/*<li><a href="/product/list.html?cate_no=138">정기배송</a></li> */}
						<li><Link to="/">고객센터</Link></li>
					</ul>
					</li>
				</ul>				
				<div className="kd-cate-adminin" style={{display: isHovered ? 'block' : 'none', }}>
					<ul className="xans-element- xans-layout xans-layout-category kd-flex">
					<li className={`xans-record-${activeCategory === 44 ? 'on' : ''}`} onMouseEnter={() => setActiveCategory(44)} onMouseLeave={() => setActiveCategory(null)}><Link to="/">비타민</Link>
					{activeCategory === 44 && (
            	<div className="sub-category">
              		<ul>
                		<li><Link to="/">비타민A</Link></li>
                		<li><Link to="/">비타민B</Link></li>
                		<li><Link to="/">비타민C</Link></li>
              		</ul>
            	</div>
          		)}
		  		</li>
				  <li className={`xans-record-${activeCategory === 113 ? 'on' : ''}`} onMouseEnter={() => setActiveCategory(113)} onMouseLeave={() => setActiveCategory(null)}><Link to="/">미네랄</Link>
				  {activeCategory === 113 && (
            	<div className="sub-category">
              		<ul>
                		<li><Link to="/">마그네슘</Link></li>
                		<li><Link to="/">헬씨플러스</Link></li>
                		<li><Link to="/">MSM 액티브</Link></li>
              		</ul>
            	</div>
          		)}
				  </li>
				  <li className={`xans-record-${activeCategory === 42 ? 'on' : ''}`} onMouseEnter={() => setActiveCategory(42)} onMouseLeave={() => setActiveCategory(null)}><Link to="/">베타글루칸</Link>
				  {activeCategory === 42 && (
            	<div className="sub-category">
              		<ul>
                		<li><Link to="/">진정주 베타글루칸 (캡슐)</Link></li>
                		<li><Link to="/">진중주 베타글루칸(분말)</Link></li>
                		<li><Link to="/">NEW 진정주 효모베타글루칸β</Link></li>
              		</ul>
            	</div>
          		)}
				  </li>
				  <li className={`xans-record-${activeCategory === 204 ? 'on' : ''}`} onMouseEnter={() => setActiveCategory(204)} onMouseLeave={() => setActiveCategory(null)}><Link to="/">효모</Link>
				  {activeCategory === 204 && (
            	<div className="sub-category">
              		<ul>
                		<li><Link to="/">NEW 진정주 효모베타글루칸β</Link></li>
                		<li><Link to="/">셀렌효모</Link></li>                		
              		</ul>
            	</div>
          		)}
				  </li>
				  <li className={`xans-record-${activeCategory === 46 ? 'on' : ''}`} onMouseEnter={() => setActiveCategory(46)} onMouseLeave={() => setActiveCategory(null)}><Link to="/">오메가3 / 오일류</Link>
				  {activeCategory === 46 && (
            	<div className="sub-category">
              		<ul>
                		<li><Link to="/">오메가3</Link></li>
                		<li><Link to="/">진정주 프리미엄 올리브오일</Link></li>
						<li><Link to="/">진정주 프리미엄 레시틴</Link></li>   
						<li><Link to="/">진정주 보라지 감마리놀렌산</Link></li>                   		
              		</ul>
            	</div>
          		)}
				  </li>
				  <li className={`xans-record-${activeCategory === 119 ? 'on' : ''}`} onMouseEnter={() => setActiveCategory(119)} onMouseLeave={() => setActiveCategory(null)}><Link to="/">밀크씨슬</Link>
				  {activeCategory === 119 && (
            	<div className="sub-category">
              		<ul>
                		<li><Link to="/">프리미엄 밀크씨슬</Link></li>
                		<li><Link to="/">유기농 밀크씨슬</Link></li>                		
              		</ul>
            	</div>
          		)}
				  </li>
				  <li className={`xans-record-${activeCategory === 209 ? 'on' : ''}`} onMouseEnter={() => setActiveCategory(209)} onMouseLeave={() => setActiveCategory(null)}><Link to="/">아미노산</Link>
				  {activeCategory === 209 && (
            	<div className="sub-category">
              		<ul>
                		<li><Link to="/">필수 아미노산 플러스</Link></li>                		           		
              		</ul>
            	</div>
          		)}
				  </li>
				  <li className={`xans-record-${activeCategory === 127 ? 'on' : ''}`} onMouseEnter={() => setActiveCategory(127)} onMouseLeave={() => setActiveCategory(null)}><Link to="/">유산균 / 차전자피</Link>
				  {activeCategory === 127 && (
            	<div className="sub-category">
              		<ul>
                		<li><Link to="/">락토케어 마이크로바이옴 프로바이오틱스</Link></li>
                		<li><Link to="/">프리미엄 차전자피</Link></li>                		
              		</ul>
            	</div>
          		)}
				  </li>
				  <li className={`xans-record-${activeCategory === 43 ? 'on' : ''}`} onMouseEnter={() => setActiveCategory(43)} onMouseLeave={() => setActiveCategory(null)}><Link to="/">루테인 / 덴티</Link>
				  {activeCategory === 43 && (
            	<div className="sub-category">
              		<ul>
                		<li><Link to="/">진정주 루테인지아잔틴 미니</Link></li>
                		<li><Link to="/">덴티플러스</Link></li>                		
              		</ul>
            	</div>
          		)}
				  </li>
				  <li className="xans-record-"><Link to="/">콜라겐</Link></li>
				  <li className={`xans-record-${activeCategory === 48 ? 'on' : ''}`} onMouseEnter={() => setActiveCategory(48)} onMouseLeave={() => setActiveCategory(null)}><Link to="/">화장품</Link>
				  {activeCategory === 48 && (
            	<div className="sub-category">
              		<ul>
                		<li><Link to="/">진정주 스노우 글로우 마스크팩</Link></li>
                		<li><Link to="/">진정주 미본 앰플</Link></li>
						<li><Link to="/">비타브리드C¹²</Link></li>              		
              		</ul>
            	</div>
          		)}
				  </li>
					</ul>
				</div>				
			</div>			
		</div>
	</div>
</div>
    </div>
  )
}

export default Header