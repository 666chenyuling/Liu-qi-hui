function BMap(){
    var BMap = window.BMap;
    var geoc = new BMap.Geocoder();
    var geolocation = new BMap.Geolocation();
    
   return new Promise((resolve,reject)=>{
        geolocation.getCurrentPosition(function (r) {
            geoc.getLocation(r.point, function (rs) {
                console.log(rs)   //具体信息可以打印出来看一下，根据需求取值     经纬度，城市，街道等等
                // var addComp = rs.addressComponents;
                // let cityName = addComp.city;
                // // _this.setState({
                // //     cityName:cityName,  //城市名
                // // })
                // console.log(_this.state.cityName);
                //district: '红谷滩区', city: '南昌市', province: '江西省'
               let address=rs.addressComponents
               let res=address.province+address.city+address.district
              resolve([res])
            });
        });
    })
   
    
}

export default BMap
