var Mock = require("mockjs")
var express = require("express")
var router = express.Router();
const path=require('path');

function resolve(dir){
	return path.join(__dirname,dir)    
}

// 首页轮播图数据
router.use("/profile",function (req,res) {
  
    //调用mock方法模拟数据
    var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
         data:[
             {
                 Img:'http://www.jinyisoubu.com/images/fb/ef/60/96dede136c072d75038371b4467da4ab371f7510.jpg',
                 id:1
             }
         ]
        }
    );
    return res.json(data);
})

// 首页趋势数据
router.use("/tendency",function (req,res) {
  
    //调用mock方法模拟数据
    var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
         data:[
             {
                categoryId:1,
                coverPic:'http://www.jinyisoubu.com/images/fb/ef/60/96dede136c072d75038371b4467da4ab371f7510.jpg',
                title:"垃圾官网这就崩了？"
             },
             {
                categoryId:2,
                coverPic:'http://www.jinyisoubu.com/images/fb/ef/60/96dede136c072d75038371b4467da4ab371f7510.jpg',
                title:"垃圾官网这就崩了？"
             },
             {
                categoryId:3,
                coverPic:'http://www.jinyisoubu.com/images/fb/ef/60/96dede136c072d75038371b4467da4ab371f7510.jpg',
                title:"垃圾官网这就崩了？"
             },
             {
                categoryId:4,
                coverPic:'http://www.jinyisoubu.com/images/fb/ef/60/96dede136c072d75038371b4467da4ab371f7510.jpg',
                title:"垃圾官网这就崩了？"
             }
         ]
        }
    );
    return res.json(data);
})


// 首页商品数据1 
router.use("/GoodsList1",function (req,res) {
  
    //调用mock方法模拟数据
    var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
         data:{
            womenWear:[
                {
                    fabricId:1,
                    imagePaths:'http://www.jinyisoubu.com/images/67/c5/a7/345ea9d73d44f92ce00473759848f26aeb904f28.jpg_t.jpg',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:2,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:3,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:4,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:5,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 }
            ],
            memWear:[
                {
                    fabricId:1,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:2,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:3,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:4,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:5,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 }
            ],
            chdWear:[
                {
                    fabricId:1,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:2,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:3,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:4,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:5,
                    imagePaths:'http://www.jinyisoubu.com/images/0b/2b/03/eceb7e700f3014e2eae9f32b3377d1f3f2985ab0.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 }
            ],
            
        }
        }
    );
    return res.json(data);
})

// 首页商品数据2
router.use("/GoodsList2",function (req,res) {
  
    //调用mock方法模拟数据
    var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
         data:{
            japan:[
                {
                    fabricId:1,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:2,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:3,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:4,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:5,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 }
            ],
            korea:[
                {
                    fabricId:1,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:2,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:3,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:4,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:5,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 }
            ],
            europe:[
                {
                    fabricId:1,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:2,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:3,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:4,
                    imagePaths:'http://www.jinyisoubu.com/images/d2/9e/6d/d490cc3446df3a15cd9e87b74e022759301fef44.JPG_t.JPG',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 },
                 {
                    fabricId:5,
                    imagePaths:'http://www.jinyisoubu.com/images/67/c5/a7/345ea9d73d44f92ce00473759848f26aeb904f28.jpg_t.jpg',
                    fabricTitle:"垃圾官网这就崩了？",
                    samplePrice:1000
                 }
            ],
            
        }
        }
    );
    return res.json(data);
})

// 商品分类数据
router.use("/classify",function (req,res) {
  
    //调用mock方法模拟数据
    var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            data:[
                {
                    "name": "棉类面料",
                    "data": [{
                      "name": "主要分类",
                      "data": [{
                        "name": "全棉布",
                        "params": {
                          "cat": "177,4,5"
                        }
                      }, {
                        "name": "高品质棉布",
                        "params": {
                          "cat": "177,4,6"
                        }
                      }, {
                        "name": "丝光棉布",
                        "params": {
                          "cat": "177,4,8"
                        }
                      }, {
                        "name": "精梳棉布",
                        "params": {
                          "cat": "177,4,9"
                        }
                      }, {
                        "name": "竹节棉布",
                        "params": {
                          "cat": "177,4,7"
                        }
                      }, {
                        "name": "纱卡",
                        "params": {
                          "cat": "177,4,184"
                        }
                      }, {
                        "name": "帆布",
                        "params": {
                          "cat": "177,4,185"
                        }
                      }, {
                        "name": "灯芯绒",
                        "params": {
                          "cat": "177,4,186"
                        }
                      }, {
                        "name": "府绸",
                        "params": {
                          "cat": "177,4,187"
                        }
                      }, {
                        "name": "贡缎",
                        "params": {
                          "cat": "177,4,188"
                        }
                      }, {
                        "name": "平纹布",
                        "params": {
                          "cat": "177,4,189"
                        }
                      }, {
                        "name": "斜纹布",
                        "params": {
                          "cat": "177,4,190"
                        }
                      }, {
                        "name": "牛仔布",
                        "params": {
                          "cat": "177,4,191"
                        }
                      }, {
                        "name": "其他棉类面料",
                        "params": {
                          "cat": "177,4,192"
                        }
                      }]
                    }, {
                      "name": "面料工艺",
                      "data": [{
                        "name": "染色",
                        "params": {
                          "cat": "177,4",
                          "ev": "1_1"
                        }
                      }, {
                        "name": "印花",
                        "params": {
                          "cat": "177,4",
                          "ev": "1_2"
                        }
                      }, {
                        "name": "提花",
                        "params": {
                          "cat": "177,4",
                          "ev": "1_3"
                        }
                      }, {
                        "name": "色织",
                        "params": {
                          "cat": "177,4",
                          "ev": "1_4"
                        }
                      }, {
                        "name": "绣花",
                        "params": {
                          "cat": "177,4",
                          "ev": "1_5"
                        }
                      }, {
                        "name": "烫金",
                        "params": {
                          "cat": "177,4",
                          "ev": "1_6"
                        }
                      }, {
                        "name": "压花压绉",
                        "params": {
                          "cat": "177,4",
                          "ev": "1_7"
                        }
                      }, {
                        "name": "拉毛磨毛",
                        "params": {
                          "cat": "177,4",
                          "ev": "1_8"
                        }
                      }, {
                        "name": "复合",
                        "params": {
                          "cat": "177,4",
                          "ev": "1_9"
                        }
                      }, {
                        "name": "砂洗",
                        "params": {
                          "cat": "177,4",
                          "ev": "1_10"
                        }
                      }]
                    }, {
                      "name": "编织方式",
                      "data": [{
                        "name": "针织",
                        "params": {
                          "cat": "177,4",
                          "ev": "2_11"
                        }
                      }, {
                        "name": "梭织",
                        "params": {
                          "cat": "177,4",
                          "ev": "2_12"
                        }
                      }, {
                        "name": "无纺",
                        "params": {
                          "cat": "177,4",
                          "ev": "2_13"
                        }
                      }]
                    }, {
                      "name": "面料属性",
                      "data": [{
                        "name": "汗布",
                        "params": {
                          "cat": "177,4",
                          "ev": "22_83"
                        }
                      }, {
                        "name": "卫衣/毛圈布",
                        "params": {
                          "cat": "177,4",
                          "ev": "22_84"
                        }
                      }, {
                        "name": "罗纹",
                        "params": {
                          "cat": "177,4",
                          "ev": "22_85"
                        }
                      }, {
                        "name": "帆布",
                        "params": {
                          "cat": "177,4",
                          "ev": "22_87"
                        }
                      }, {
                        "name": "珠地",
                        "params": {
                          "cat": "177,4",
                          "ev": "22_88"
                        }
                      }, {
                        "name": "蕾丝",
                        "params": {
                          "cat": "177,4",
                          "ev": "22_90"
                        }
                      }, {
                        "name": "府绸",
                        "params": {
                          "cat": "177,4",
                          "ev": "22_91"
                        }
                      }, {
                        "name": "提花布",
                        "params": {
                          "cat": "177,4",
                          "ev": "22_99"
                        }
                      }, {
                        "name": "格子",
                        "params": {
                          "cat": "177,4",
                          "ev": "22_4582"
                        }
                      }, {
                        "name": "条纹",
                        "params": {
                          "cat": "177,4",
                          "ev": "22_4583"
                        }
                      }]
                    }, {
                      "name": "纱织",
                      "data": [{
                        "name": "6S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_14"
                        }
                      }, {
                        "name": "7S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_15"
                        }
                      }, {
                        "name": "10S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_16"
                        }
                      }, {
                        "name": "16S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_17"
                        }
                      }, {
                        "name": "21S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_18"
                        }
                      }, {
                        "name": "32S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_19"
                        }
                      }, {
                        "name": "40S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_4504"
                        }
                      }, {
                        "name": "50S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_4505"
                        }
                      }, {
                        "name": "60S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_4506"
                        }
                      }, {
                        "name": "70S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_4507"
                        }
                      }, {
                        "name": "80S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_4508"
                        }
                      }, {
                        "name": "100S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_4546"
                        }
                      }, {
                        "name": "120S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_4580"
                        }
                      }, {
                        "name": "160S",
                        "params": {
                          "cat": "177,4",
                          "ev": "3_4581"
                        }
                      }]
                    }, {
                      "name": "克重",
                      "data": [{
                        "name": "60g-100g",
                        "params": {
                          "cat": "177,4",
                          "ev": "4_20"
                        }
                      }, {
                        "name": "101g-125g",
                        "params": {
                          "cat": "177,4",
                          "ev": "4_21"
                        }
                      }, {
                        "name": "126g-150g",
                        "params": {
                          "cat": "177,4",
                          "ev": "4_22"
                        }
                      }, {
                        "name": "151g-180g",
                        "params": {
                          "cat": "177,4",
                          "ev": "4_23"
                        }
                      }, {
                        "name": "181g-230g",
                        "params": {
                          "cat": "177,4",
                          "ev": "4_24"
                        }
                      }, {
                        "name": "231g-280g",
                        "params": {
                          "cat": "177,4",
                          "ev": "4_25"
                        }
                      }, {
                        "name": "281g-330g",
                        "params": {
                          "cat": "177,4",
                          "ev": "4_26"
                        }
                      }, {
                        "name": "331g-380g",
                        "params": {
                          "cat": "177,4",
                          "ev": "4_27"
                        }
                      }, {
                        "name": "381g-430g",
                        "params": {
                          "cat": "177,4",
                          "ev": "4_21"
                        }
                      }, {
                        "name": "431g-480g",
                        "params": {
                          "cat": "177,4",
                          "ev": "4_29"
                        }
                      }, {
                        "name": "480g以上",
                        "params": {
                          "cat": "177,4",
                          "ev": "4_30"
                        }
                      }]
                    }]
                  }, {
                    "name": "麻类面料",
                    "data": [{
                      "name": "主要分类",
                      "data": [{
                        "name": "亚麻",
                        "params": {
                          "cat": "177,10,11"
                        }
                      }, {
                        "name": "苎麻",
                        "params": {
                          "cat": "177,10,12"
                        }
                      }, {
                        "name": "丝光麻",
                        "params": {
                          "cat": "177,10,15"
                        }
                      }, {
                        "name": "棉麻",
                        "params": {
                          "cat": "177,10,13"
                        }
                      }, {
                        "name": "麻粘",
                        "params": {
                          "cat": "177,10,14"
                        }
                      }, {
                        "name": "汉麻",
                        "params": {
                          "cat": "177,10,16"
                        }
                      }, {
                        "name": "其他麻类",
                        "params": {
                          "cat": "177,10,194"
                        }
                      }]
                    }, {
                      "name": "面料工艺",
                      "data": [{
                        "name": "染色",
                        "params": {
                          "cat": "177,10",
                          "ev": "1_1"
                        }
                      }, {
                        "name": "提花",
                        "params": {
                          "cat": "177,10",
                          "ev": "1_3"
                        }
                      }, {
                        "name": "色织",
                        "params": {
                          "cat": "177,10",
                          "ev": "1_4"
                        }
                      }, {
                        "name": "绣花",
                        "params": {
                          "cat": "177,10",
                          "ev": "1_5"
                        }
                      }, {
                        "name": "砂洗",
                        "params": {
                          "cat": "177,10",
                          "ev": "1_10"
                        }
                      }]
                    }, {
                      "name": "编织方式",
                      "data": [{
                        "name": "针织",
                        "params": {
                          "cat": "177,10",
                          "ev": "2_11"
                        }
                      }, {
                        "name": "梭织",
                        "params": {
                          "cat": "177,10",
                          "ev": "2_12"
                        }
                      }, {
                        "name": "无纺",
                        "params": {
                          "cat": "177,10",
                          "ev": "2_13"
                        }
                      }]
                    }, {
                      "name": "面料属性",
                      "data": [{
                        "name": "汗布",
                        "params": {
                          "cat": "177,10",
                          "ev": "22_83"
                        }
                      }, {
                        "name": "珠地",
                        "params": {
                          "cat": "177,10",
                          "ev": "22_88"
                        }
                      }, {
                        "name": "蕾丝",
                        "params": {
                          "cat": "177,10",
                          "ev": "22_90"
                        }
                      }, {
                        "name": "提花布",
                        "params": {
                          "cat": "177,10",
                          "ev": "22_99"
                        }
                      }, {
                        "name": "格子",
                        "params": {
                          "cat": "177,10",
                          "ev": "22_4582"
                        }
                      }, {
                        "name": "条纹",
                        "params": {
                          "cat": "177,10",
                          "ev": "22_4583"
                        }
                      }]
                    }, {
                      "name": "纱织",
                      "data": [{
                        "name": "6S",
                        "params": {
                          "cat": "177,10",
                          "ev": "3_14"
                        }
                      }, {
                        "name": "7S",
                        "params": {
                          "cat": "177,10",
                          "ev": "3_15"
                        }
                      }, {
                        "name": "10S",
                        "params": {
                          "cat": "177,10",
                          "ev": "3_16"
                        }
                      }, {
                        "name": "16S",
                        "params": {
                          "cat": "177,10",
                          "ev": "3_17"
                        }
                      }, {
                        "name": "21S",
                        "params": {
                          "cat": "177,10",
                          "ev": "3_18"
                        }
                      }, {
                        "name": "32S",
                        "params": {
                          "cat": "177,10",
                          "ev": "3_19"
                        }
                      }, {
                        "name": "40S",
                        "params": {
                          "cat": "177,10",
                          "ev": "3_4504"
                        }
                      }, {
                        "name": "60S",
                        "params": {
                          "cat": "177,10",
                          "ev": "3_4506"
                        }
                      }, {
                        "name": "100S",
                        "params": {
                          "cat": "177,10",
                          "ev": "3_4546"
                        }
                      }]
                    }, {
                      "name": "克重",
                      "data": [{
                        "name": "60g-100g",
                        "params": {
                          "cat": "177,10",
                          "ev": "4_20"
                        }
                      }, {
                        "name": "101g-125g",
                        "params": {
                          "cat": "177,10",
                          "ev": "4_21"
                        }
                      }, {
                        "name": "126g-150g",
                        "params": {
                          "cat": "177,10",
                          "ev": "4_22"
                        }
                      }, {
                        "name": "151g-180g",
                        "params": {
                          "cat": "177,10",
                          "ev": "4_23"
                        }
                      }, {
                        "name": "181g-230g",
                        "params": {
                          "cat": "177,10",
                          "ev": "4_24"
                        }
                      }, {
                        "name": "231g-280g",
                        "params": {
                          "cat": "177,10",
                          "ev": "4_25"
                        }
                      }, {
                        "name": "381g-430g",
                        "params": {
                          "cat": "177,10",
                          "ev": "4_28"
                        }
                      }]
                    }]
                  }, {
                    "name": "人造纤维",
                    "data": [{
                      "name": "主要分类",
                      "data": [{
                        "name": "人棉",
                        "params": {
                          "cat": "177,38,39"
                        }
                      }, {
                        "name": "天丝",
                        "params": {
                          "cat": "177,38,40"
                        }
                      }, {
                        "name": "莫代尔",
                        "params": {
                          "cat": "177,38,41"
                        }
                      }, {
                        "name": "竹纤维",
                        "params": {
                          "cat": "177,38,44"
                        }
                      }, {
                        "name": "其它",
                        "params": {
                          "cat": "177,38,45"
                        }
                      }]
                    }, {
                      "name": "面料工艺",
                      "data": [{
                        "name": "染色",
                        "params": {
                          "cat": "177,38",
                          "ev": "1_1"
                        }
                      }, {
                        "name": "提花",
                        "params": {
                          "cat": "177,38",
                          "ev": "1_3"
                        }
                      }, {
                        "name": "色织",
                        "params": {
                          "cat": "177,38",
                          "ev": "1_4"
                        }
                      }, {
                        "name": "拉毛磨毛",
                        "params": {
                          "cat": "177,38",
                          "ev": "1_8"
                        }
                      }, {
                        "name": "复合",
                        "params": {
                          "cat": "177,38",
                          "ev": "1_9"
                        }
                      }]
                    }, {
                      "name": "编织方式",
                      "data": [{
                        "name": "针织",
                        "params": {
                          "cat": "177,38",
                          "ev": "2_11"
                        }
                      }, {
                        "name": "梭织",
                        "params": {
                          "cat": "177,38",
                          "ev": "2_12"
                        }
                      }, {
                        "name": "无纺",
                        "params": {
                          "cat": "177,38",
                          "ev": "2_13"
                        }
                      }]
                    }, {
                      "name": "面料属性",
                      "data": [{
                        "name": "汗布",
                        "params": {
                          "cat": "177,38",
                          "ev": "22_83"
                        }
                      }, {
                        "name": "卫衣/毛圈布",
                        "params": {
                          "cat": "177,38",
                          "ev": "22_84"
                        }
                      }, {
                        "name": "罗纹",
                        "params": {
                          "cat": "177,38",
                          "ev": "22_85"
                        }
                      }, {
                        "name": "打鸡布/罗马布",
                        "params": {
                          "cat": "177,38",
                          "ev": "22_86"
                        }
                      }, {
                        "name": "珠地",
                        "params": {
                          "cat": "177,38",
                          "ev": "22_88"
                        }
                      }, {
                        "name": "雪纺",
                        "params": {
                          "cat": "177,38",
                          "ev": "22_89"
                        }
                      }, {
                        "name": "蕾丝",
                        "params": {
                          "cat": "177,38",
                          "ev": "22_90"
                        }
                      }, {
                        "name": "法兰绒",
                        "params": {
                          "cat": "177,38",
                          "ev": "22_95"
                        }
                      }, {
                        "name": "空气层",
                        "params": {
                          "cat": "177,38",
                          "ev": "22_97"
                        }
                      }, {
                        "name": "提花布",
                        "params": {
                          "cat": "177,10",
                          "ev": "22_99"
                        }
                      }, {
                        "name": "条纹",
                        "params": {
                          "cat": "177,38",
                          "ev": "22_4583"
                        }
                      }]
                    }, {
                      "name": "纱织",
                      "data": [{
                        "name": "10S",
                        "params": {
                          "cat": "177,38",
                          "ev": "3_16"
                        }
                      }, {
                        "name": "21S",
                        "params": {
                          "cat": "177,38",
                          "ev": "3_18"
                        }
                      }, {
                        "name": "32S",
                        "params": {
                          "cat": "177,38",
                          "ev": "3_19"
                        }
                      }, {
                        "name": "40S",
                        "params": {
                          "cat": "177,38",
                          "ev": "3_4504"
                        }
                      }, {
                        "name": "50S",
                        "params": {
                          "cat": "177,38",
                          "ev": "3_4505"
                        }
                      }, {
                        "name": "60S",
                        "params": {
                          "cat": "177,38",
                          "ev": "3_4506"
                        }
                      }, {
                        "name": "70S",
                        "params": {
                          "cat": "177,38",
                          "ev": "3_4507"
                        }
                      }, {
                        "name": "80S",
                        "params": {
                          "cat": "177,38",
                          "ev": "3_4508"
                        }
                      }, {
                        "name": "100S",
                        "params": {
                          "cat": "177,38",
                          "ev": "3_4546"
                        }
                      }]
                    }, {
                      "name": "克重",
                      "data": [{
                        "name": "60g-100g",
                        "params": {
                          "cat": "177,38",
                          "ev": "4_20"
                        }
                      }, {
                        "name": "101g-125g",
                        "params": {
                          "cat": "177,38",
                          "ev": "4_21"
                        }
                      }, {
                        "name": "126g-150g",
                        "params": {
                          "cat": "177,38",
                          "ev": "4_22"
                        }
                      }, {
                        "name": "151g-180g",
                        "params": {
                          "cat": "177,38",
                          "ev": "4_23"
                        }
                      }, {
                        "name": "181g-230g",
                        "params": {
                          "cat": "177,38",
                          "ev": "4_24"
                        }
                      }, {
                        "name": "231g-280g",
                        "params": {
                          "cat": "177,38",
                          "ev": "4_25"
                        }
                      }, {
                        "name": "281g-330g",
                        "params": {
                          "cat": "177,38",
                          "ev": "4_26"
                        }
                      }, {
                        "name": "331g-380g",
                        "params": {
                          "cat": "177,38",
                          "ev": "4_27"
                        }
                      }, {
                        "name": "381g-430g",
                        "params": {
                          "cat": "177,38",
                          "ev": "4_28"
                        }
                      }, {
                        "name": "431g-480g",
                        "params": {
                          "cat": "177,38",
                          "ev": "4_29"
                        }
                      }]
                    }]
                  }, {
                    "name": "化纤面料",
                    "data": [{
                      "name": "主要分类",
                      "data": [{
                        "name": "涤纶",
                        "params": {
                          "cat": "177,32,33"
                        }
                      }, {
                        "name": "锦纶/尼龙",
                        "params": {
                          "cat": "177,32,34"
                        }
                      }, {
                        "name": "腈纶",
                        "params": {
                          "cat": "177,32,196"
                        }
                      }, {
                        "name": "尼龙",
                        "params": {
                          "cat": "177,32,197"
                        }
                      }, {
                        "name": "其他化纤",
                        "params": {
                          "cat": "177,32,37"
                        }
                      }]
                    }, {
                      "name": "面料工艺",
                      "data": [{
                        "name": "染色",
                        "params": {
                          "cat": "177,32",
                          "ev": "1_1"
                        }
                      }, {
                        "name": "印花",
                        "params": {
                          "cat": "177,32",
                          "ev": "1_2"
                        }
                      }, {
                        "name": "提花",
                        "params": {
                          "cat": "177,32",
                          "ev": "1_3"
                        }
                      }, {
                        "name": "色织",
                        "params": {
                          "cat": "177,32",
                          "ev": "1_4"
                        }
                      }, {
                        "name": "烫金",
                        "params": {
                          "cat": "177,32",
                          "ev": "1_6"
                        }
                      }, {
                        "name": "压花压绉",
                        "params": {
                          "cat": "177,32",
                          "ev": "1_7"
                        }
                      }, {
                        "name": "拉毛磨毛",
                        "params": {
                          "cat": "177,32",
                          "ev": "1_8"
                        }
                      }, {
                        "name": "复合",
                        "params": {
                          "cat": "177,32",
                          "ev": "1_9"
                        }
                      }, {
                        "name": "砂洗",
                        "params": {
                          "cat": "177,32",
                          "ev": "1_10"
                        }
                      }]
                    }, {
                      "name": "编织方式",
                      "data": [{
                        "name": "针织",
                        "params": {
                          "cat": "177,32",
                          "ev": "2_11"
                        }
                      }, {
                        "name": "梭织",
                        "params": {
                          "cat": "177,32",
                          "ev": "2_12"
                        }
                      }, {
                        "name": "无纺",
                        "params": {
                          "cat": "177,32",
                          "ev": "2_13"
                        }
                      }]
                    }, {
                      "name": "面料属性",
                      "data": [{
                        "name": "汗布",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_83"
                        }
                      }, {
                        "name": "卫衣/毛圈布",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_84"
                        }
                      }, {
                        "name": "罗纹",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_85"
                        }
                      }, {
                        "name": "打鸡布/罗马布",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_86"
                        }
                      }, {
                        "name": "珠地",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_88"
                        }
                      }, {
                        "name": "雪纺",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_89"
                        }
                      }, {
                        "name": "蕾丝",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_90"
                        }
                      }, {
                        "name": "欧根纱",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_92"
                        }
                      }, {
                        "name": "色丁",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_93"
                        }
                      }, {
                        "name": "麂皮绒",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_94"
                        }
                      }, {
                        "name": "法兰绒",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_95"
                        }
                      }, {
                        "name": "空气层",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_97"
                        }
                      }, {
                        "name": "提花布",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_99"
                        }
                      }, {
                        "name": "无纺布",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_100"
                        }
                      }, {
                        "name": "格子",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_4582"
                        }
                      }, {
                        "name": "条纹",
                        "params": {
                          "cat": "177,32",
                          "ev": "22_4583"
                        }
                      }]
                    }, {
                      "name": "纱织",
                      "data": [{
                        "name": "21S",
                        "params": {
                          "cat": "177,32",
                          "ev": "3_18"
                        }
                      }, {
                        "name": "32S",
                        "params": {
                          "cat": "177,32",
                          "ev": "3_19"
                        }
                      }, {
                        "name": "40S",
                        "params": {
                          "cat": "177,32",
                          "ev": "3_4504"
                        }
                      }, {
                        "name": "50S",
                        "params": {
                          "cat": "177,32",
                          "ev": "3_4505"
                        }
                      }, {
                        "name": "60S",
                        "params": {
                          "cat": "177,32",
                          "ev": "3_4506"
                        }
                      }, {
                        "name": "80S",
                        "params": {
                          "cat": "177,32",
                          "ev": "3_4508"
                        }
                      }]
                    }, {
                      "name": "克重",
                      "data": [{
                        "name": "60g-100g",
                        "params": {
                          "cat": "177,32",
                          "ev": "4_20"
                        }
                      }, {
                        "name": "101g-125g",
                        "params": {
                          "cat": "177,32",
                          "ev": "4_21"
                        }
                      }, {
                        "name": "126g-150g",
                        "params": {
                          "cat": "177,32",
                          "ev": "4_22"
                        }
                      }, {
                        "name": "151g-180g",
                        "params": {
                          "cat": "177,32",
                          "ev": "4_23"
                        }
                      }, {
                        "name": "181g-230g",
                        "params": {
                          "cat": "177,32",
                          "ev": "4_24"
                        }
                      }, {
                        "name": "231g-280g",
                        "params": {
                          "cat": "177,32",
                          "ev": "4_25"
                        }
                      }, {
                        "name": "331g-380g",
                        "params": {
                          "cat": "177,32",
                          "ev": "4_27"
                        }
                      }, {
                        "name": "381g-430g",
                        "params": {
                          "cat": "177,32",
                          "ev": "4_28"
                        }
                      }, {
                        "name": "431g-480g",
                        "params": {
                          "cat": "177,32",
                          "ev": "4_29"
                        }
                      }, {
                        "name": "480g以上",
                        "params": {
                          "cat": "177,32",
                          "ev": "4_30"
                        }
                      }]
                    }]
                  }, {
                    "name": "毛纺面料",
                    "data": [{
                      "name": "主要分类",
                      "data": [{
                        "name": "毛呢",
                        "params": {
                          "cat": "177,26,198"
                        }
                      }, {
                        "name": "呢绒",
                        "params": {
                          "cat": "177,26,199"
                        }
                      }, {
                        "name": "羊绒",
                        "params": {
                          "cat": "177,26,27"
                        }
                      }, {
                        "name": "兔毛",
                        "params": {
                          "cat": "177,26,28"
                        }
                      }, {
                        "name": "羊毛",
                        "params": {
                          "cat": "177,26,29"
                        }
                      }, {
                        "name": "羊羔毛",
                        "params": {
                          "cat": "177,26,200"
                        }
                      }, {
                        "name": "其它毛纺",
                        "params": {
                          "cat": "177,26,31"
                        }
                      }]
                    }, {
                      "name": "面料工艺",
                      "data": [{
                        "name": "染色",
                        "params": {
                          "cat": "177,26",
                          "ev": "1_1"
                        }
                      }, {
                        "name": "印花",
                        "params": {
                          "cat": "177,26",
                          "ev": "1_2"
                        }
                      }, {
                        "name": "提花",
                        "params": {
                          "cat": "177,26",
                          "ev": "1_3"
                        }
                      }, {
                        "name": "色织",
                        "params": {
                          "cat": "177,26",
                          "ev": "1_4"
                        }
                      }, {
                        "name": "压花压绉",
                        "params": {
                          "cat": "177,26",
                          "ev": "1_7"
                        }
                      }, {
                        "name": "拉毛磨毛",
                        "params": {
                          "cat": "177,26",
                          "ev": "1_8"
                        }
                      }, {
                        "name": "复合",
                        "params": {
                          "cat": "177,26",
                          "ev": "1_9"
                        }
                      }, {
                        "name": "砂洗",
                        "params": {
                          "cat": "177,26",
                          "ev": "1_10"
                        }
                      }]
                    }, {
                      "name": "编织方式",
                      "data": [{
                        "name": "针织",
                        "params": {
                          "cat": "177,26",
                          "ev": "2_11"
                        }
                      }, {
                        "name": "梭织",
                        "params": {
                          "cat": "177,26",
                          "ev": "2_12"
                        }
                      }]
                    }, {
                      "name": "面料属性",
                      "data": [{
                        "name": "罗纹",
                        "params": {
                          "cat": "177,26",
                          "ev": "22_85"
                        }
                      }, {
                        "name": "珠地",
                        "params": {
                          "cat": "177,26",
                          "ev": "22_88"
                        }
                      }, {
                        "name": "麂皮绒",
                        "params": {
                          "cat": "177,26",
                          "ev": "22_94"
                        }
                      }, {
                        "name": "提花布",
                        "params": {
                          "cat": "177,26",
                          "ev": "22_99"
                        }
                      }, {
                        "name": "格子",
                        "params": {
                          "cat": "177,26",
                          "ev": "22_4582"
                        }
                      }, {
                        "name": "条纹",
                        "params": {
                          "cat": "177,26",
                          "ev": "22_4583"
                        }
                      }]
                    }, {
                      "name": "纱织",
                      "data": [{
                        "name": "40S",
                        "params": {
                          "cat": "177,26",
                          "ev": "3_4504"
                        }
                      }, {
                        "name": "50S",
                        "params": {
                          "cat": "177,26",
                          "ev": "3_4505"
                        }
                      }]
                    }, {
                      "name": "克重",
                      "data": [{
                        "name": "60g-100g",
                        "params": {
                          "cat": "177,26",
                          "ev": "4_20"
                        }
                      }, {
                        "name": "101g-125g",
                        "params": {
                          "cat": "177,26",
                          "ev": "4_21"
                        }
                      }, {
                        "name": "126g-150g",
                        "params": {
                          "cat": "177,26",
                          "ev": "4_22"
                        }
                      }, {
                        "name": "151g-180g",
                        "params": {
                          "cat": "177,26",
                          "ev": "4_23"
                        }
                      }, {
                        "name": "181g-230g",
                        "params": {
                          "cat": "177,26",
                          "ev": "4_24"
                        }
                      }, {
                        "name": "231g-280g",
                        "params": {
                          "cat": "177,26",
                          "ev": "4_25"
                        }
                      }, {
                        "name": "331g-380g",
                        "params": {
                          "cat": "177,26",
                          "ev": "4_27"
                        }
                      }, {
                        "name": "381g-430g",
                        "params": {
                          "cat": "177,26",
                          "ev": "4_28"
                        }
                      }, {
                        "name": "431g-480g",
                        "params": {
                          "cat": "177,26",
                          "ev": "4_29"
                        }
                      }, {
                        "name": "480g以上",
                        "params": {
                          "cat": "177,26",
                          "ev": "4_30"
                        }
                      }]
                    }]
                  }, {
                    "name": "混纺、交织类",
                    "data": [{
                      "name": "主要分类",
                      "data": [{
                        "name": "棉麻混纺",
                        "params": {
                          "cat": "177,46,50"
                        }
                      }, {
                        "name": "棉毛混纺",
                        "params": {
                          "cat": "177,46,201"
                        }
                      }, {
                        "name": "化纤类混纺",
                        "params": {
                          "cat": "177,46,202"
                        }
                      }, {
                        "name": "涤棉混纺/TC",
                        "params": {
                          "cat": "177,46,47"
                        }
                      }, {
                        "name": "涤粘／TR",
                        "params": {
                          "cat": "177,46,48"
                        }
                      }, {
                        "name": "锦棉混纺",
                        "params": {
                          "cat": "177,46,49"
                        }
                      }, {
                        "name": "其他混纺、交织类面料",
                        "params": {
                          "cat": "177,46,51"
                        }
                      }]
                    }, {
                      "name": "面料工艺",
                      "data": [{
                        "name": "染色",
                        "params": {
                          "cat": "177,46",
                          "ev": "1_1"
                        }
                      }, {
                        "name": "印花",
                        "params": {
                          "cat": "177,46",
                          "ev": "1_2"
                        }
                      }, {
                        "name": "提花",
                        "params": {
                          "cat": "177,46",
                          "ev": "1_3"
                        }
                      }, {
                        "name": "色织",
                        "params": {
                          "cat": "177,46",
                          "ev": "1_4"
                        }
                      }, {
                        "name": "绣花",
                        "params": {
                          "cat": "177,46",
                          "ev": "1_5"
                        }
                      }, {
                        "name": "烫金",
                        "params": {
                          "cat": "177,46",
                          "ev": "1_6"
                        }
                      }, {
                        "name": "拉毛磨毛",
                        "params": {
                          "cat": "177,46",
                          "ev": "1_8"
                        }
                      }, {
                        "name": "复合",
                        "params": {
                          "cat": "177,46",
                          "ev": "1_9"
                        }
                      }, {
                        "name": "砂洗",
                        "params": {
                          "cat": "177,46",
                          "ev": "1_10"
                        }
                      }]
                    }, {
                      "name": "编织方式",
                      "data": [{
                        "name": "针织",
                        "params": {
                          "cat": "177,46",
                          "ev": "2_11"
                        }
                      }, {
                        "name": "梭织",
                        "params": {
                          "cat": "177,46",
                          "ev": "2_12"
                        }
                      }, {
                        "name": "无纺",
                        "params": {
                          "cat": "177,46",
                          "ev": "2_13"
                        }
                      }]
                    }, {
                      "name": "面料属性",
                      "data": [{
                        "name": "汗布",
                        "params": {
                          "cat": "177,46",
                          "ev": "22_83"
                        }
                      }, {
                        "name": "罗纹",
                        "params": {
                          "cat": "177,46",
                          "ev": "22_85"
                        }
                      }, {
                        "name": "帆布",
                        "params": {
                          "cat": "177,46",
                          "ev": "22_87"
                        }
                      }, {
                        "name": "珠地",
                        "params": {
                          "cat": "177,46",
                          "ev": "22_88"
                        }
                      }, {
                        "name": "蕾丝",
                        "params": {
                          "cat": "177,46",
                          "ev": "22_90"
                        }
                      }, {
                        "name": "提花布",
                        "params": {
                          "cat": "177,46",
                          "ev": "22_99"
                        }
                      }, {
                        "name": "格子",
                        "params": {
                          "cat": "177,46",
                          "ev": "22_4582"
                        }
                      }, {
                        "name": "条纹",
                        "params": {
                          "cat": "177,46",
                          "ev": "22_4583"
                        }
                      }]
                    }, {
                      "name": "纱织",
                      "data": [{
                        "name": "6S",
                        "params": {
                          "cat": "177,46",
                          "ev": "3_14"
                        }
                      }, {
                        "name": "16S",
                        "params": {
                          "cat": "177,46",
                          "ev": "3_17"
                        }
                      }, {
                        "name": "21S",
                        "params": {
                          "cat": "177,46",
                          "ev": "3_18"
                        }
                      }, {
                        "name": "32S",
                        "params": {
                          "cat": "177,46",
                          "ev": "3_19"
                        }
                      }, {
                        "name": "40S",
                        "params": {
                          "cat": "177,46",
                          "ev": "3_4504"
                        }
                      }, {
                        "name": "50S",
                        "params": {
                          "cat": "177,46",
                          "ev": "3_4505"
                        }
                      }, {
                        "name": "60S",
                        "params": {
                          "cat": "177,46",
                          "ev": "3_4506"
                        }
                      }]
                    }, {
                      "name": "克重",
                      "data": [{
                        "name": "60g-100g",
                        "params": {
                          "cat": "177,46",
                          "ev": "4_20"
                        }
                      }, {
                        "name": "101g-125g",
                        "params": {
                          "cat": "177,46",
                          "ev": "4_21"
                        }
                      }, {
                        "name": "126g-150g",
                        "params": {
                          "cat": "177,46",
                          "ev": "4_22"
                        }
                      }, {
                        "name": "151g-180g",
                        "params": {
                          "cat": "177,46",
                          "ev": "4_23"
                        }
                      }, {
                        "name": "181g-230g",
                        "params": {
                          "cat": "177,46",
                          "ev": "4_24"
                        }
                      }, {
                        "name": "231g-280g",
                        "params": {
                          "cat": "177,46",
                          "ev": "4_25"
                        }
                      }, {
                        "name": "281g-330g",
                        "params": {
                          "cat": "177,46",
                          "ev": "4_26"
                        }
                      }, {
                        "name": "331g-380g",
                        "params": {
                          "cat": "177,46",
                          "ev": "4_27"
                        }
                      }, {
                        "name": "381g-430g",
                        "params": {
                          "cat": "177,46",
                          "ev": "4_28"
                        }
                      }, {
                        "name": "431g-480g",
                        "params": {
                          "cat": "177,46",
                          "ev": "4_29"
                        }
                      }, {
                        "name": "480g以上",
                        "params": {
                          "cat": "177,46",
                          "ev": "4_30"
                        }
                      }]
                    }]
                  }, {
                    "name": "丝绸面料",
                    "data": [{
                      "name": "主要分类",
                      "data": [{
                        "name": "缎类",
                        "params": {
                          "cat": "177,19,203"
                        }
                      },
                        {
                          "name": "绸类",
                          "params": {
                            "cat": "177,19,204"
                          }
                        }, {
                          "name": "绉类",
                          "params": {
                            "cat": "177,19,206"
                          }
                        }, {
                          "name": "纺类",
                          "params": {
                            "cat": "177,19,208"
                          }
                        }, {
                          "name": "乔其",
                          "params": {
                            "cat": "177,19,21"
                          }
                        }, {
                          "name": "雪纺",
                          "params": {
                            "cat": "177,19,209"
                          }
                        }, {
                          "name": "欧根纱",
                          "params": {
                            "cat": "177,19,210"
                          }
                        }, {
                          "name": "色丁",
                          "params": {
                            "cat": "177,19,211"
                          }
                        }, {
                          "name": "其他丝绸面料",
                          "params": {
                            "cat": "177,19,212"
                          }
                        }
                      ]
                    }, {
                      "name": "面料工艺",
                      "data": [{
                        "name": "染色",
                        "params": {
                          "cat": "177,19",
                          "ev": "1_1"
                        }
                      }, {
                        "name": "印花",
                        "params": {
                          "cat": "177,19",
                          "ev": "1_2"
                        }
                      }, {
                        "name": "提花",
                        "params": {
                          "cat": "177,19",
                          "ev": "1_3"
                        }
                      }]
                    }, {
                      "name": "编织方式",
                      "data": [{
                        "name": "针织",
                        "params": {
                          "cat": "177,19",
                          "ev": "2_11"
                        }
                      }, {
                        "name": "梭织",
                        "params": {
                          "cat": "177,19",
                          "ev": "2_12"
                        }
                      }]
                    }, {
                      "name": "面料属性",
                      "data": [{
                        "name": "汗布",
                        "params": {
                          "cat": "177,19",
                          "ev": "22_83"
                        }
                      }, {
                        "name": "雪纺",
                        "params": {
                          "cat": "177,19",
                          "ev": "22_89"
                        }
                      }, {
                        "name": "蕾丝",
                        "params": {
                          "cat": "177,19",
                          "ev": "22_90"
                        }
                      }, {
                        "name": "府绸",
                        "params": {
                          "cat": "177,19",
                          "ev": "22_91"
                        }
                      }, {
                        "name": "欧根纱",
                        "params": {
                          "cat": "177,19",
                          "ev": "22_92"
                        }
                      }]
                    }, {
                      "name": "纱织",
                      "data": [{
                        "name": "60S",
                        "params": {
                          "cat": "177,19",
                          "ev": "3_4506"
                        }
                      }]
                    }, {
                      "name": "克重",
                      "data": [{
                        "name": "60g-100g",
                        "params": {
                          "cat": "177,19",
                          "ev": "4_20"
                        }
                      }, {
                        "name": "126g-150g",
                        "params": {
                          "cat": "177,19",
                          "ev": "4_22"
                        }
                      }, {
                        "name": "151g-180g",
                        "params": {
                          "cat": "177,19",
                          "ev": "4_23"
                        }
                      }, {
                        "name": "231g-280g",
                        "params": {
                          "cat": "177,19",
                          "ev": "4_25"
                        }
                      }]
                    }]
                  }, {
                    "name": "皮革",
                    "data": [{
                      "name": "主要分类",
                      "data": [{
                        "name": "人造革",
                        "params": {
                          "cat": "177,52,54"
                        }
                      }, {
                        "name": "合成革",
                        "params": {
                          "cat": "177,52,213"
                        }
                      }, {
                        "name": "真皮",
                        "params": {
                          "cat": "177,52,53"
                        }
                      }, {
                        "name": "其他皮革",
                        "params": {
                          "cat": "177,52,214"
                        }
                      }]
                    }, {
                      "name": "面料工艺",
                      "data": [{
                        "name": "烫金",
                        "params": {
                          "cat": "177,52",
                          "ev": "1_6"
                        }
                      }]
                    }]
                  }, {
                    "name": "面料用途",
                    "data": [{
                      "name": "服装面料",
                      "data": [{
                        "name": "汉服",
                        "params": {
                          "cat": "183,220,311"
                        }
                      }, {
                        "name": "禅服",
                        "params": {
                          "cat": "183,220,312"
                        }
                      }, {
                        "name": "外套",
                        "params": {
                          "cat": "183,220,223"
                        }
                      }, {
                        "name": "夹克",
                        "params": {
                          "cat": "183,220,224"
                        }
                      }, {
                        "name": "衬衫",
                        "params": {
                          "cat": "183,220,225"
                        }
                      }, {
                        "name": "T恤/背心",
                        "params": {
                          "cat": "183,220,226"
                        }
                      }, {
                        "name": "户外/运动套装",
                        "params": {
                          "cat": "183,220,227"
                        }
                      }, {
                        "name": "棒球服",
                        "params": {
                          "cat": "183,220,228"
                        }
                      }, {
                        "name": "卫衣",
                        "params": {
                          "cat": "183,220,229"
                        }
                      }, {
                        "name": "裤装",
                        "params": {
                          "cat": "183,220,230"
                        }
                      }, {
                        "name": "裙装",
                        "params": {
                          "cat": "183,220,231"
                        }
                      }, {
                        "name": "风衣/夹克",
                        "params": {
                          "cat": "183,220,232"
                        }
                      }, {
                        "name": "皮衣",
                        "params": {
                          "cat": "183,220,233"
                        }
                      }, {
                        "name": "马甲",
                        "params": {
                          "cat": "183,220,234"
                        }
                      }, {
                        "name": "POLO衫",
                        "params": {
                          "cat": "183,220,235"
                        }
                      }, {
                        "name": "工作服",
                        "params": {
                          "cat": "183,220,236"
                        }
                      }, {
                        "name": "针织衫/毛衣",
                        "params": {
                          "cat": "183,220,237"
                        }
                      }, {
                        "name": "内衣",
                        "params": {
                          "cat": "183,220,238"
                        }
                      }, {
                        "name": "围巾",
                        "params": {
                          "cat": "183,220,239"
                        }
                      }, {
                        "name": "泳衣",
                        "params": {
                          "cat": "183,220,240"
                        }
                      }, {
                        "name": "冲锋衣",
                        "params": {
                          "cat": "183,220,241"
                        }
                      }, {
                        "name": "西装",
                        "params": {
                          "cat": "183,220,242"
                        }
                      }, {
                        "name": "开衫",
                        "params": {
                          "cat": "183,220,243"
                        }
                      }, {
                        "name": "羽绒服/棉服",
                        "params": {
                          "cat": "183,220,244"
                        }
                      }, {
                        "name": "牛仔",
                        "params": {
                          "cat": "183,220,245"
                        }
                      }, {
                        "name": "家居服",
                        "params": {
                          "cat": "183,220,246"
                        }
                      }, {
                        "name": "童装",
                        "params": {
                          "cat": "183,220,247"
                        }
                      }, {
                        "name": "婴儿服",
                        "params": {
                          "cat": "183,220,248"
                        }
                      }, {
                        "name": "孕妇服",
                        "params": {
                          "cat": "183,220,249"
                        }
                      }, {
                        "name": "其他",
                        "params": {
                          "cat": "183,220,250"
                        }
                      }]
                    }, {
                      "name": "家居",
                      "data": [{
                        "name": "沙发",
                        "params": {
                          "cat": "183,221,251"
                        }
                      }, {
                        "name": "床上用品",
                        "params": {
                          "cat": "183,221,252"
                        }
                      }, {
                        "name": "桌布",
                        "params": {
                          "cat": "183,221,253"
                        }
                      }, {
                        "name": "窗帘",
                        "params": {
                          "cat": "183,221,254"
                        }
                      }, {
                        "name": "地毯",
                        "params": {
                          "cat": "183,221,255"
                        }
                      }, {
                        "name": "抱枕",
                        "params": {
                          "cat": "183,221,256"
                        }
                      }, {
                        "name": "DIY手工品",
                        "params": {
                          "cat": "183,221,257"
                        }
                      }, {
                        "name": "坐垫",
                        "params": {
                          "cat": "183,221,258"
                        }
                      }, {
                        "name": "毛巾",
                        "params": {
                          "cat": "183,221,259"
                        }
                      }, {
                        "name": "箱包",
                        "params": {
                          "cat": "183,221,260"
                        }
                      }, {
                        "name": "鞋子",
                        "params": {
                          "cat": "183,221,261"
                        }
                      }, {
                        "name": "帽子",
                        "params": {
                          "cat": "183,221,262"
                        }
                      }]
                    }, {
                      "name": "其他",
                      "data": [{
                        "name": "舞台布置",
                        "params": {
                          "cat": "183,222,263"
                        }
                      }, {
                        "name": "cosplay服饰",
                        "params": {
                          "cat": "183,222,264"
                        }
                      }, {
                        "name": "婚庆服饰",
                        "params": {
                          "cat": "183,222,265"
                        }
                      }, {
                        "name": "医疗",
                        "params": {
                          "cat": "183,222,266"
                        }
                      }, {
                        "name": "厨卫用品",
                        "params": {
                          "cat": "183,222,267"
                        }
                      }, {
                        "name": "装饰布",
                        "params": {
                          "cat": "183,222,268"
                        }
                      }, {
                        "name": "里料",
                        "params": {
                          "cat": "183,222,269"
                        }
                      }, {
                        "name": "其他",
                        "params": {
                          "cat": "183,222,271"
                        }
                      }]
                    }]
                  }, {
                    "name": "纱线",
                    "data": [{
                      "name": "主要分类",
                      "data": [{
                        "name": "羊绒纱",
                        "params": {
                          "cat": "179,181,275"
                        }
                      }, {
                        "name": "其他纱线",
                        "params": {
                          "cat": "179,181,280"
                        }
                      }]
                    }]
                  }, {
                    "name": "纺织辅料",
                    "data": [{
                      "name": "主要分类",
                      "data": [{
                        "name": "纺织填充物",
                        "params": {
                          "cat": "180,57,281"
                        }
                      }, {
                        "name": "衬布",
                        "params": {
                          "cat": "180,57,282"
                        }
                      }, {
                        "name": "拉链",
                        "params": {
                          "cat": "180,57,287"
                        }
                      }, {
                        "name": "钮扣",
                        "params": {
                          "cat": "180,57,289"
                        }
                      }, {
                        "name": "流苏、穗",
                        "params": {
                          "cat": "180,57,291"
                        }
                      }, {
                        "name": "花边",
                        "params": {
                          "cat": "180,57,292"
                        }
                      }, {
                        "name": "织带",
                        "params": {
                          "cat": "180,57,293"
                        }
                      }, {
                        "name": "松紧带",
                        "params": {
                          "cat": "180,57,294"
                        }
                      }, {
                        "name": "缝纫针",
                        "params": {
                          "cat": "180,57,58"
                        }
                      }, {
                        "name": "其他带子类",
                        "params": {
                          "cat": "180,57,295"
                        }
                      }, {
                        "name": "绳子类",
                        "params": {
                          "cat": "180,57,296"
                        }
                      }, {
                        "name": "线类",
                        "params": {
                          "cat": "180,57,297"
                        }
                      }, {
                        "name": "亮片",
                        "params": {
                          "cat": "180,57,298"
                        }
                      }, {
                        "name": "烫图、烫钻",
                        "params": {
                          "cat": "180,57,299"
                        }
                      }, {
                        "name": "洗唛、商标",
                        "params": {
                          "cat": "180,57,301"
                        }
                      }, {
                        "name": "服装饰品",
                        "params": {
                          "cat": "180,57,303"
                        }
                      }, {
                        "name": "其他纺织辅料",
                        "params": {
                          "cat": "180,57,304"
                        }
                      }]
                    }]
                  }
            ]
        }
    );
    return res.json(data);
})
module.exports = router;