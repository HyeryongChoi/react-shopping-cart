"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[373],{"./src/stories/ProductList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ProductList_stories}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),atoms=__webpack_require__("./src/recoil/atoms.ts"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/react/index.js"),fetchApi=function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(url){var response,data;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,fetch(url);case 3:if((response=_context.sent).ok){_context.next=6;break}throw Error("[Error] status: ".concat(response.status));case 6:return _context.next=8,response.json();case 8:return data=_context.sent,_context.abrupt("return",data);case 12:_context.prev=12,_context.t0=_context.catch(0),_context.t0 instanceof Error&&console.log(_context.t0.message);case 15:case"end":return _context.stop()}}),_callee,null,[[0,12]])})));return function fetchApi(_x){return _ref.apply(this,arguments)}}(),Product=__webpack_require__("./src/components/product/Product.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var _Default$parameters,_Default$parameters2,_Default$parameters2$,Style={Container:styled_components_browser_esm.zo.ul(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-column-gap: 45px;\n    grid-row-gap: 60px;\n\n    /* 태블릿 */\n    @media screen and (max-width: 991px) {\n      grid-template-columns: repeat(3, 1fr);\n    }\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      grid-template-columns: repeat(1, 1fr);\n    }\n  "])))},ProductList_stories={title:"ShoppingCart/product/ProductList",component:function ProductList(){var _useRecoilState=(0,es.FV)(atoms.v),_useRecoilState2=(0,slicedToArray.Z)(_useRecoilState,2),productList=_useRecoilState2[0];return function useSetFetchedData(url,setData){var setFetchedData=(0,react.useCallback)((0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){var rawData;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetchApi(url);case 2:rawData=_context.sent,setData(rawData);case 4:case"end":return _context.stop()}}),_callee)}))),[url,setData]);(0,react.useEffect)((function(){setFetchedData()}),[setFetchedData])}("/api/products",_useRecoilState2[1]),(0,jsx_runtime.jsx)(Style.Container,{children:productList.map((function(product){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(Product.Z,{productInfo:product})},product.id)}))})},tags:["autodocs"],decorators:[function(Story){return(0,jsx_runtime.jsx)(Story,{})}]},Default={};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/product/Product.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Product}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),svg=__webpack_require__("./src/assets/svg/index.ts"),useCart=__webpack_require__("./src/hooks/useCart.ts"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),useToast=function useToast(){var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isOpenToast=_useState2[0],setIsOpenToast=_useState2[1];return{isOpenToast:isOpenToast,openToast:function openToast(){return setIsOpenToast(!0)},closeToast:function closeToast(){return setIsOpenToast(!1)}}},Stepper=__webpack_require__("./src/components/Stepper.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Toast(_ref){var _ref$isOpenToast=_ref.isOpenToast,isOpenToast=void 0!==_ref$isOpenToast&&_ref$isOpenToast,closeToast=_ref.closeToast,message=_ref.message;return isOpenToast&&setTimeout((function(){closeToast()}),2e3),(0,jsx_runtime.jsx)(Style.Wrapper,{isOpenToast:isOpenToast,children:message})}var ShowAndHide=(0,styled_components_browser_esm.F4)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)([" \n  0% {\n    opacity: 0;\n  }\n  70%{\n    opacity: 1;\n  }\n  80%{\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))),Style={Wrapper:styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    justify-content: center;\n    align-items: center;\n\n    width: 300px;\n    height: 50px;\n\n    position: fixed;\n    top: 90%;\n    left: 50%;\n    transform: translateX(-50%);\n    border: none;\n    border-radius: 7px;\n    background-color: var(--toast-box-color);\n\n    font-size: 14px;\n    color: var(--grey-100);\n\n    z-index: 1000;\n\n    ","\n  "])),(function(props){return props.isOpenToast?(0,styled_components_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n            display: flex;\n            animation: "," 2s forwards;\n          "])),ShowAndHide):(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n            display: none;\n          "])))}))};try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{isOpenToast:{defaultValue:{value:"false"},description:"",name:"isOpenToast",required:!1,type:{name:"boolean"}},closeToast:{defaultValue:null,description:"",name:"closeToast",required:!0,type:{name:"() => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/common/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}var Product_templateObject,Product_templateObject2,Product_templateObject3,Product_templateObject4,_templateObject5,_templateObject6,_templateObject7,Price=__webpack_require__("./src/components/common/Price.tsx"),constants=__webpack_require__("./src/constants/index.ts");function Product(_ref){var productInfo=_ref.productInfo,name=productInfo.name,price=productInfo.price,imageUrl=productInfo.imageUrl,_useCart=(0,useCart.j)(productInfo),addToCart=_useCart.addToCart,getCartItem=_useCart.getCartItem,updateProductQuantity=_useCart.updateProductQuantity,_useToast=useToast(),isOpenToast=_useToast.isOpenToast,openToast=_useToast.openToast,closeToast=_useToast.closeToast,cartItem=getCartItem();return(0,jsx_runtime.jsxs)(Product_Style.Container,{children:[(0,jsx_runtime.jsx)(Product_Style.ProductImageWrapper,{children:(0,jsx_runtime.jsx)(Product_Style.ProductImage,{src:imageUrl,alt:name,loading:"lazy"})}),(0,jsx_runtime.jsxs)(Product_Style.ProductInfo,{children:[(0,jsx_runtime.jsxs)(Product_Style.ProductNameAndStepperContainer,{children:[(0,jsx_runtime.jsx)(Product_Style.ProductName,{title:name,children:name}),cartItem?(0,jsx_runtime.jsx)(Stepper.Z,{quantity:cartItem.quantity,maxQuantity:constants.c5.MAX_COUNT,updateQuantity:updateProductQuantity}):(0,jsx_runtime.jsx)(Product_Style.CartIconWrapper,{onClick:function handleCartClick(){addToCart(),openToast()},children:(0,jsx_runtime.jsx)(svg.w7,{fill:"#AAAAAA"})})]}),(0,jsx_runtime.jsx)(Price.Z,{price:price,size:"large"})]}),(0,jsx_runtime.jsx)(Toast,{isOpenToast:isOpenToast,closeToast:closeToast,message:"✨ 상품을 장바구니에 담았습니다."})]})}var Product_Style={Container:styled_components_browser_esm.zo.div(Product_templateObject||(Product_templateObject=(0,taggedTemplateLiteral.Z)(["\n    cursor: pointer;\n  "]))),ProductImageWrapper:styled_components_browser_esm.zo.div(Product_templateObject2||(Product_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    position: relative;\n    width: 100%;\n    padding-bottom: 100%;\n    overflow: hidden;\n  "]))),ProductImage:styled_components_browser_esm.zo.img(Product_templateObject3||(Product_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  "]))),ProductInfo:styled_components_browser_esm.zo.div(Product_templateObject4||(Product_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    padding: 18px 0 0 0;\n    letter-spacing: 0.5px;\n  "]))),ProductNameAndStepperContainer:styled_components_browser_esm.zo.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    margin-bottom: 8px;\n  "]))),ProductName:styled_components_browser_esm.zo.p(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n    max-width: 120px;\n    overflow: hidden;\n\n    font-size: 16px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  "]))),CartIconWrapper:styled_components_browser_esm.zo.button(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: inherit;\n    height: 30px;\n\n    cursor: pointer;\n  "])))};try{Product.displayName="Product",Product.__docgenInfo={description:"",displayName:"Product",props:{productInfo:{defaultValue:null,description:"",name:"productInfo",required:!0,type:{name:"ProductInfo"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/product/Product.tsx#Product"]={docgenInfo:Product.__docgenInfo,name:"Product",path:"src/components/product/Product.tsx#Product"})}catch(__react_docgen_typescript_loader_error){}}}]);