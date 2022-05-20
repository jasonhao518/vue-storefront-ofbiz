var n=Object.defineProperty;var ee=Object.getOwnPropertyDescriptor;var te=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var c=(e,t)=>{var r={};for(var s in e)i.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&a)for(var s of a(e))t.indexOf(s)<0&&re.call(e,s)&&(r[s]=e[s]);return r};var se=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},oe=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of te(t))!i.call(e,o)&&o!==r&&n(e,o,{get:()=>t[o],enumerable:!(s=ee(t,o))||s.enumerable});return e};var ne=e=>oe(n({},"__esModule",{value:!0}),e);var Ir={};se(Ir,{cartGetters:()=>z,categoryGetters:()=>E,facetGetters:()=>L,forgotPasswordGetters:()=>q,orderGetters:()=>K,productGetters:()=>V,reviewGetters:()=>H,storeGetters:()=>J,useBilling:()=>m,useCart:()=>p,useCategory:()=>l,useContent:()=>f,useFacet:()=>P,useForgotPassword:()=>A,useMakeOrder:()=>h,useProduct:()=>I,useReview:()=>U,useShipping:()=>w,useShippingProvider:()=>R,useStore:()=>b,useUser:()=>G,useUserBilling:()=>W,useUserOrder:()=>N,useUserShipping:()=>Q,useWishlist:()=>j,userBillingGetters:()=>X,userGetters:()=>Y,userShippingGetters:()=>Z,wishlistGetters:()=>$});module.exports=ne(Ir);var u=require("@vue-storefront/core"),ae={load:async(e,{customQuery:t})=>(console.log("Mocked: useBilling.load"),{}),save:async(e,{params:t,billingDetails:r,customQuery:s})=>(console.log("Mocked: useBilling.save"),{})},m=(0,u.useBillingFactory)(ae);var d=require("@vue-storefront/core"),ie={load:async(e,{customQuery:t})=>(console.log("Mocked: useCart.load"),{}),addItem:async(e,{currentCart:t,product:r,quantity:s,customQuery:o})=>(console.log("Mocked: useCart.addItem"),{}),removeItem:async(e,{currentCart:t,product:r,customQuery:s})=>(console.log("Mocked: useCart.removeItem"),{}),updateItemQty:async(e,{currentCart:t,product:r,quantity:s,customQuery:o})=>(console.log("Mocked: useCart.updateItemQty"),{}),clear:async(e,{currentCart:t})=>(console.log("Mocked: useCart.clear"),{}),applyCoupon:async(e,{currentCart:t,couponCode:r,customQuery:s})=>(console.log("Mocked: useCart.applyCoupon"),{updatedCart:{},updatedCoupon:{}}),removeCoupon:async(e,{currentCart:t,couponCode:r,customQuery:s})=>(console.log("Mocked: useCart.removeCoupon"),{updatedCart:{}}),isInCart:(e,{currentCart:t,product:r})=>(console.log("Mocked: useCart.isInCart"),!1)},p=(0,d.useCartFactory)(ie);var g=require("@vue-storefront/core"),ce={categorySearch:async(e,s)=>{var o=s,{customQuery:t}=o,r=c(o,["customQuery"]);return console.log("Mocked: useCategory.categorySearch"),[{id:1,name:"Women",slug:"women",items:[]},{id:2,name:"Men",slug:"men",items:[]},{id:3,name:"Kids",slug:"kids",items:[]}]}},l=(0,g.useCategoryFactory)(ce);function f(){}var y=require("@vue-storefront/core"),ue={search:async(e,t)=>(console.log("Mocked: useFacet.search"),{})},P=(0,y.useFacetFactory)(ue);var x=require("@vue-storefront/core"),me={resetPassword:async(e,{email:t,customQuery:r})=>(console.log("Mocked: resetPassword"),{}),setNewPassword:async(e,{tokenValue:t,newPassword:r,customQuery:s})=>(console.log("Mocked: setNewPassword"),{})},A=(0,x.useForgotPasswordFactory)(me);var C=require("@vue-storefront/core"),de={make:async(e,{customQuery:t})=>(console.log("Mocked: useMakeOrder.make"),{})},h=(0,C.useMakeOrderFactory)(de);var _=require("@vue-storefront/core"),pe={productsSearch:async(e,t)=>(console.log("Mocked: useProduct.productsSearch"),{})},I=(0,_.useProductFactory)(pe);var S=require("@vue-storefront/core"),ge={searchReviews:async(e,t)=>(console.log("Mocked: useReview.searchReviews"),{}),addReview:async(e,t)=>(console.log("Mocked: useReview.addReview"),{})},U=(0,S.useReviewFactory)(ge);var v=require("@vue-storefront/core"),le={load:async(e,{customQuery:t})=>(console.log("Mocked: useShipping.load"),{}),save:async(e,{shippingDetails:t,customQuery:r})=>(console.log("Mocked: useShipping.save"),{})},w=(0,v.useShippingFactory)(le);var F=require("@vue-storefront/core"),fe={load:async(e,{customQuery:t})=>(console.log("Mocked: loadShippingProvider"),{}),save:async(e,{shippingMethod:t,customQuery:r})=>(console.log("Mocked: saveShippingProvider"),{})},R=(0,F.useShippingProviderFactory)(fe);var k=require("@vue-storefront/core"),b=(0,k.useStoreFactory)({load(e,t){return console.log("Mocked: useStore.load"),Promise.resolve({})},change(e,t){return console.log("Mocked: useStore.change"),Promise.resolve({})}});var M=require("@vue-storefront/core"),ye={load:async e=>(console.log("Mocked: useUser.load"),{}),logOut:async e=>{console.log("Mocked: useUser.logOut")},updateUser:async(e,{currentUser:t,updatedUserData:r})=>(console.log("Mocked: useUser.updateUser"),{}),register:async(e,{email:t,password:r,firstName:s,lastName:o})=>(console.log("Mocked: useUser.register"),{}),logIn:async(e,{username:t,password:r})=>(console.log("Mocked: useUser.logIn"),{}),changePassword:async(e,{currentUser:t,currentPassword:r,newPassword:s})=>(console.log("Mocked: useUser.changePassword"),{})},G=(0,M.useUserFactory)(ye);var O=require("@vue-storefront/core"),Pe={addAddress:async(e,t)=>(console.log("Mocked: useUserBilling.addAddress"),{}),deleteAddress:async(e,t)=>(console.log("Mocked: useUserBilling.deleteAddress"),{}),updateAddress:async(e,t)=>(console.log("Mocked: useUserBilling.updateAddress"),{}),load:async(e,t)=>(console.log("Mocked: useUserBilling.load"),{}),setDefaultAddress:async(e,t)=>(console.log("Mocked: useUserBilling.setDefaultAddress"),{})},W=(0,O.useUserBillingFactory)(Pe);var B=require("@vue-storefront/core"),xe={searchOrders:async(e,t)=>(console.log("Mocked: searchOrders"),{})},N=(0,B.useUserOrderFactory)(xe);var T=require("@vue-storefront/core"),Ae={addAddress:async(e,t)=>(console.log("Mocked: useUserShipping.addAddress"),{}),deleteAddress:async(e,t)=>(console.log("Mocked: useUserShipping.deleteAddress"),{}),updateAddress:async(e,t)=>(console.log("Mocked: useUserShipping.updateAddress"),{}),load:async(e,t)=>(console.log("Mocked: useUserShipping.load"),{}),setDefaultAddress:async(e,t)=>(console.log("Mocked: useUserShipping.setDefaultAddress"),{})},Q=(0,T.useUserShippingFactory)(Ae);var D=require("@vue-storefront/core"),Ce={load:async e=>(console.log("Mocked: useWishlist.load"),{}),addItem:async(e,{currentWishlist:t,product:r})=>(console.log("Mocked: useWishlist.addItem"),{}),removeItem:async(e,{currentWishlist:t,product:r})=>(console.log("Mocked: useWishlist.removeItem"),{}),clear:async(e,{currentWishlist:t})=>(console.log("Mocked: useWishlist.clear"),{}),isInWishlist:(e,{currentWishlist:t,product:r})=>(console.log("Mocked: useWishlist.isInWishlist"),!1)},j=(0,D.useWishlistFactory)(Ce);function he(e){return[{}]}function _e(e){return"Name"}function Ie(e){return"https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg"}function Se(e){return{regular:12,special:10}}function Ue(e){return 1}function ve(e,t){return{color:"red"}}function we(e){return""}function Fe(e){return{total:12,subtotal:12,special:10}}function Re(e){return 0}function ke(e){return 1}function be(e){return""}function Me(e){return[]}function Ge(e){return[]}var z={getTotals:Fe,getShippingPrice:Re,getItems:he,getItemName:_e,getItemImage:Ie,getItemPrice:Se,getItemQty:Ue,getItemAttributes:ve,getItemSku:we,getFormattedPrice:be,getTotalItems:ke,getCoupons:Me,getDiscounts:Ge};function Oe(e){return{label:"",slug:"",items:[],isCurrent:!1}}var E={getTree:Oe};function We(e,t){return[]}function Be(e,t){return[]}function Ne(e){return{options:[],selected:""}}function Te(e){return{label:"",slug:"",items:null,isCurrent:!1,count:0}}function Qe(e){return[{_id:1,_description:"Some description",_categoriesRef:["1","2"],name:"Black jacket",sku:"black-jacket",images:["https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg"],price:{original:12.34,current:10}}]}function De(e){return{currentPage:1,totalPages:1,totalItems:1,itemsPerPage:10,pageOptions:[]}}function je(e){return[]}var L={getSortOptions:Ne,getGrouped:Be,getAll:We,getProducts:Qe,getCategoryTree:Te,getBreadcrumbs:je,getPagination:De};function ze(e){return""}function Ee(e){return!0}var q={getResetPasswordToken:ze,isPasswordChanged:Ee};function Le(e){return""}function qe(e){return"1"}function Ke(e){return""}function Ve(e){return 0}function He(e){return[]}function Je(e){return""}function Xe(e){return""}function Ye(e){return 0}function Ze(e){return 0}function $e(e){return""}function et(e){return 1}var K={getDate:Le,getId:qe,getStatus:Ke,getPrice:Ve,getItems:He,getItemSku:Je,getItemName:Xe,getItemQty:Ye,getItemPrice:Ze,getFormattedPrice:$e,getOrdersTotal:et};function tt(e){return"Name"}function rt(e){return"slug"}function st(e){return{regular:0,special:0}}function ot(e){return[{small:"https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg",normal:"https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg",big:"https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg"}]}function nt(e){return"https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg"}function at(e,t){return[{_id:1,_description:"Some description",_categoriesRef:["1","2"],name:"Black jacket",sku:"black-jacket",images:["https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg"],price:{original:12.34,current:10}}]}function it(e,t){return{}}function ct(e){return""}function ut(e){return[]}function mt(e){return"1"}function dt(e){return""}function pt(e){return 0}function gt(e){return 0}var V={getName:tt,getSlug:rt,getPrice:st,getGallery:ot,getCoverImage:nt,getFiltered:at,getAttributes:it,getDescription:ct,getCategoryIds:ut,getId:mt,getFormattedPrice:dt,getTotalReviews:pt,getAverageRating:gt};function lt(e){return[]}function ft(e){return""}function yt(e){return""}function Pt(e){return""}function xt(e){return 0}function At(e){return""}function Ct(e){return 0}function ht(e){return 0}function _t(e){return[]}function It(e){return 0}var H={getItems:lt,getReviewId:ft,getReviewAuthor:yt,getReviewMessage:Pt,getReviewRating:xt,getReviewDate:At,getTotalReviews:Ct,getAverageRating:ht,getRatesCount:_t,getReviewsPage:It};function St(e,t={}){return[]}function Ut(e){return null}var J={getItems:St,getSelected:Ut};function vt(e,t){return[]}function wt(e){return{}}function Ft(e){return 0}function Rt(e){return""}function kt(e){return""}function bt(e){return""}function Mt(e){return""}function Gt(e){return""}function Ot(e){return""}function Wt(e){return""}function Bt(e){return""}function Nt(e){return""}function Tt(e){return""}function Qt(e){return""}function Dt(e){return""}function jt(e){return""}function zt(e){return""}function Et(e){return!1}var X={getAddresses:vt,getDefault:wt,getTotal:Ft,getPostCode:Rt,getStreetName:kt,getStreetNumber:bt,getCity:Mt,getFirstName:Gt,getLastName:Ot,getCountry:Wt,getPhone:Bt,getEmail:Nt,getProvince:Tt,getCompanyName:Qt,getTaxNumber:Dt,getId:jt,getApartmentNumber:zt,isDefault:Et};function Lt(e){return""}function qt(e){return""}function Kt(e){return""}function Vt(e){return""}var Y={getFirstName:Lt,getLastName:qt,getFullName:Kt,getEmailAddress:Vt};function Ht(e,t){return[]}function Jt(e){return{}}function Xt(e){return 0}function Yt(e){return""}function Zt(e){return""}function $t(e){return""}function er(e){return""}function tr(e){return""}function rr(e){return""}function sr(e){return""}function or(e){return""}function nr(e){return""}function ar(e){return""}function ir(e){return""}function cr(e){return""}function ur(e){return""}function mr(e){return""}function dr(e){return!1}var Z={getAddresses:Ht,getDefault:Jt,getTotal:Xt,getPostCode:Yt,getStreetName:Zt,getStreetNumber:$t,getCity:er,getFirstName:tr,getLastName:rr,getCountry:sr,getPhone:or,getEmail:nr,getProvince:ar,getCompanyName:ir,getTaxNumber:cr,getId:ur,getApartmentNumber:mr,isDefault:dr};function pr(e){return[]}function gr(e){return{total:10,subtotal:10}}function lr(e){return""}function fr(e){return""}function yr(e){return{regular:12,special:10}}function Pr(e){return 1}function xr(e,t){return{color:"red"}}function Ar(e){return""}function Cr(e){return 0}function hr(e){return 1}function _r(e){return""}var $={getItems:pr,getTotals:gr,getItemName:lr,getItemImage:fr,getItemPrice:yr,getItemQty:Pr,getItemAttributes:xr,getShippingPrice:Cr,getItemSku:Ar,getTotalItems:hr,getFormattedPrice:_r};0&&(module.exports={cartGetters,categoryGetters,facetGetters,forgotPasswordGetters,orderGetters,productGetters,reviewGetters,storeGetters,useBilling,useCart,useCategory,useContent,useFacet,useForgotPassword,useMakeOrder,useProduct,useReview,useShipping,useShippingProvider,useStore,useUser,useUserBilling,useUserOrder,useUserShipping,useWishlist,userBillingGetters,userGetters,userShippingGetters,wishlistGetters});
//# sourceMappingURL=index.js.map
