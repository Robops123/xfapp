import  global from './global.js';
 export const Common = {
     created() {
		 
     },
     methods: {
         networkEnable(){
			 var ret=''
			 uni.getNetworkType({
			     success: function (res) {
			 		if(res.networkType=='none' || res.networkType=='unknown'){
			 			global.showToast('请检查网络连接')
			 			ret=false
			 		}else{
			 			ret=true
			 		}
			     },
			 	fail:(reason) =>{
			 		global.showToast('无法检测')
			 	}
			 });
			 return ret;
		 },
		 guid() {
		     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		         var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		         return v.toString(16);
		     });
		 },
		 // 巡检点表
		 populateDB(point_id, point_name, nfc_id, qr_code) {
			 // var field = {};
			 // field['point_id'] = 31;
			 // field['point_name'] = 'aabbcc';
			 // field['nfc_id'] = 'aaaaa';
			 // field['qr_code'] = 'bbbbb';
			 // console.log("field==========" + field);
			 		 
			 // 保证列的顺序和value的顺序是一致的
			 // var columns = ['point_id', 'point_name', 'nfc_id', 'qr_code'], values = [];
			 // columns.forEach(function (idx, key) {
			 //     var v = field[idx]
			 //     if (typeof(v) === "string") {
			 //         values.push("'" + v + "'");
			 //     } else {
			 //         values.push(v);
			 //     }
			 // });
		 				  const insert = 'INSERT INTO fp_inspection_point(point_id, point_name, nfc_id, qr_code) VALUES('+[point_id, point_name, nfc_id, qr_code].join(",") +')';
		 				 plus.sqlite.executeSql({
		 				 		name: 'first',
		 				 		sql: 'CREATE TABLE IF NOT EXISTS fp_inspection_point (point_id INTEGER PRIMARY KEY, point_name TEXT, nfc_id TEXT, qr_code TEXT);',
		 				 		success: function(e){
		 				 			plus.sqlite.executeSql({
		 				 					name: 'first',
		 				 					sql: insert,
		 				 					success: function(e){
												uni.$emit('resourceAdd')
		 				 						// console.log('58-------------巡检点表插入成功');
		 				 					},
		 				 					fail: function(e){
		 				 						console.log('executeSql failed: '+JSON.stringify(e));
		 				 					}
		 				 				});
		 				 		},
		 				 		fail: function(e){
		 				 			console.log('executeSql failed: '+JSON.stringify(e));
		 				 		}
		 				 	});
		 },
		 // 巡检点和巡检项关联表
		 pointItemDataInit(point_id, inspection_item_id, status){
			// var field = {};
			// field['point_id'] = 31;
			// field['inspection_item_id'] = 272;
			// field['status'] = 0;
			 		 
			//  // 保证列的顺序和value的顺序是一致的
			//  var columns = ['point_id', 'inspection_item_id', 'status'], values = [];
			//  columns.forEach(function (idx, key) {
			//      var v = field[idx]
			//      if (typeof(v) === "string") {
			//          values.push("'" + v + "'");
			//      } else {
			//          values.push(v);
			//      }
			//  });
			 		 				 const insert = 'INSERT INTO fp_inspectionPoint_Item(point_id, inspection_item_id, status) VALUES('+[point_id, inspection_item_id, status].join(",")+')';
			 		 				 plus.sqlite.executeSql({
			 		 				 		name: 'first',
			 		 				 		sql: 'CREATE TABLE IF NOT EXISTS fp_inspectionPoint_Item (point_id INTEGER, inspection_item_id INTEGER, status INTEGER);',
			 		 				 		success: function(e){
			 		 				 			plus.sqlite.executeSql({
			 		 				 					name: 'first',
			 		 				 					sql: insert,
			 		 				 					success: function(e){
			 		 				 						// console.log('96----------关联表插入成功');
															uni.$emit('resourceAdd')
			 		 				 					},
			 		 				 					fail: function(e){
			 		 				 						console.log('executeSql failed: '+JSON.stringify(e));
			 		 				 					}
			 		 				 				});
			 		 				 		},
			 		 				 		fail: function(e){
			 		 				 			console.log('executeSql failed: '+JSON.stringify(e));
			 		 				 		}
			 		 				 	});
		 },
		 // 巡检项表
		 itemDataInit(id, check_name, parent_full_name) {
		 //     var field = {};
			//  var that=this
		 //     field['id'] = 272;
		 //     field['check_name'] = '水量是否充足';
		 //     field['parent_full_name'] = '建筑消防设施功能检查/消火栓给水系统/消防水池';
		 //     console.log("field==========" + field);
		 
		 //     // 保证列的顺序和value的顺序是一致的
			// var columns = ['id', 'check_name', 'parent_full_name'], values = [];
			//  columns.forEach(function (idx, key) {
			//      var v = field[idx]
			//      if (typeof(v) === "string") {
			//          values.push("'" + v + "'");
			//      } else {
			//          values.push(v);
			//      }
			//  });
			 
			  const insert = 'INSERT INTO fp_inspection_item(id, check_name, parent_full_name) VALUES('+[id, check_name, parent_full_name].join(",")+')';
			 plus.sqlite.executeSql({
			 		name: 'first',
			 		sql: 'CREATE TABLE IF NOT EXISTS fp_inspection_item (id INTEGER PRIMARY KEY, check_name TEXT, parent_full_name TEXT);',
			 		success: function(e){
			 			plus.sqlite.executeSql({
			 					name: 'first',
			 					sql: insert,
			 					success: function(e){
									uni.$emit('resourceAdd')
			 						// console.log('137------------巡检项插入成功');
			 					},
			 					fail: function(e){
			 						console.log('executeSql failed: '+JSON.stringify(e));
			 					}
			 				});
			 		},
			 		fail: function(e){
			 			console.log('executeSql failed: '+JSON.stringify(e));
			 		}
			 	});
		 },
		 // 保存隐患
		 // content:'',    内容
		 // pictures:[],    图片地址数组   保存字符串?
		 // createTime :currentDate,     创建时间
		 // tenantId:'',                 业主id
		 // checkId :uni.getStorageSync('activityId')     巡检记录id
		 saveTrouble(form,sucCB){
			 var createTime=JSON.stringify(form.createTime)
			  var content=JSON.stringify(form.content)
			   var pictures=JSON.stringify(form.pictures.join(','))
			    var tenantId=form.tenantId
				 var checkId=JSON.stringify(form.checkId)
				 var order_id=form.order
				 console.log(createTime,content,pictures,tenantId,checkId,order_id)
			 const insert = "INSERT INTO fp_trouble_record(createTime, content, pictures, tenantId, checkId, order_id) VALUES("+createTime+","+content+","+pictures+","+tenantId+","+checkId+","+order_id+");";
			 plus.sqlite.executeSql({
			 		name: 'first',
			 		sql: 'CREATE TABLE IF NOT EXISTS fp_trouble_record (createTime TEXT, content TEXT, pictures TEXT, tenantId INTEGER, checkId TEXT, order_id INTEGER);',
			 		success: function(e){
			 			plus.sqlite.executeSql({
			 					name: 'first',
			 					sql: insert,
			 					success: function(e){
			 						console.log('167------------隐患记录保存成功');
			 									sucCB(200)
			 					},
			 					fail: function(e){
			 						console.log('executeSql failed: '+JSON.stringify(e));
			 					}
			 				});
			 		},
			 		fail: function(e){
			 			console.log('executeSql failed: '+JSON.stringify(e));
			 		}
			 	});
		 },
		 // 查询隐患记录
		 findTrouble(checkId,index,sucCB,errCB){
		 			var inspectionItems = new Array();
					var sql=''
					if(index==null && checkId!=null){
						sql = "select * from fp_trouble_record where checkId='"+checkId+"'";
					}else if(checkId==null && index==null){
						sql = "select * from fp_trouble_record";
					}else{
						sql = "select * from fp_trouble_record where checkId='"+checkId+"' and order_id="+index;
					}
					console.log(sql)
		 			plus.sqlite.selectSql({
		 					name: 'first',
		 					sql: sql,
		 					success: function(e){
		 						sucCB(e);
		 					},
		 					fail: function(e){
								errCB()
		 						console.log('executeSql failed: '+JSON.stringify(e));
		 					}
		 				});
		 },
		 updateTrouble(form,sucCB){
			 var createTime=JSON.stringify(form.createTime)
			  var content=JSON.stringify(form.content)
			   var pictures=JSON.stringify(form.pictures.join(','))
			    var tenantId=form.tenantId
			 	var checkId=JSON.stringify(form.checkId)
			  var order_id=parseInt(form.order)
			 const updateStr = "update fp_trouble_record set createTime="+createTime+", content="+content+", pictures="+pictures+", tenantId="+tenantId+", checkId="+checkId+", order_id="+order_id+" where checkId="+checkId+" and order_id="+order_id;
			 plus.sqlite.executeSql({
			 		name: 'first',
			 		sql: updateStr,
			 		success: function(e){
			 			sucCB(200)
			 		},
			 		fail: function(e){
			 			console.log('executeSql failed: '+JSON.stringify(e));
			 		}
			 	});
		 },
		 // 保存巡检记录
		 saveActivity(form,submitted,sucCB,errCB){
			 var tenantId=form.createTime
			  var xgId=JSON.stringify(form.xgId)
			   var xgList=JSON.stringify(form.xgList)
			    var remark=JSON.stringify(form.remark)
			 	 var startTime=JSON.stringify(form.startTime)
			 	var endTime=JSON.stringify(form.endTime)
				var submitted=submitted
			 	 console.log(xgList)
			 const insert = "INSERT INTO fp_inspection_record(tenantId, xgId, xgList, remark, startTime, endTime, submitted) VALUES("+tenantId+","+xgId+","+xgList+","+remark+","+startTime+","+endTime+","+submitted+");";
			 plus.sqlite.executeSql({
			 		name: 'first',
			 		sql: 'CREATE TABLE IF NOT EXISTS fp_inspection_record (tenantId INTEGER, xgId TEXT, xgList TEXT, remark TEXT, startTime TEXT, endTime TEXT, submitted INTEGER);',
			 		success: function(e){
			 			plus.sqlite.executeSql({
			 					name: 'first',
			 					sql: insert,
			 					success: function(e){
			 						console.log('260------------巡检记录保存成功');
			 									sucCB(200)
			 					},
			 					fail: function(e){
			 						console.log('executeSql failed: '+JSON.stringify(e));
			 					}
			 				});
			 		},
			 		fail: function(e){
			 			console.log('executeSql failed: '+JSON.stringify(e));
			 		}
			 	});
		 },
		 // 查询巡检记录
		 findActivity(submitted,sucCB,errCB){
		 					var sql=''
		 					if(submitted==null){
		 						sql = "select * from fp_inspection_record";
		 					}else{
		 						sql = "select * from fp_inspection_record where submitted="+submitted;
		 					}
		 			plus.sqlite.selectSql({
		 					name: 'first',
		 					sql: sql,
		 					success: function(e){
		 						sucCB(e);
		 					},
		 					fail: function(e){
		 								errCB()
		 						console.log('executeSql failed: '+JSON.stringify(e));
		 					}
		 				});
		 },
		  // * 保存巡检点下的巡检项
		  // * @param missionId 任务id
		  // * @param pointId 巡检点id
		  // * @param itemId 巡检项id
		  // * @param itemValue 巡检项的值（0-正常 1-异常）
		  itemAdd(missionId, pointId, itemId, itemValue,sucCB) {
			  const insert = "INSERT INTO fp_inspection_result(missionId, pointId, itemId, itemValue) VALUES('"+missionId+"',"+pointId+","+itemId+","+itemValue+")";
			  plus.sqlite.executeSql({
			  		name: 'first',
			  		sql: 'CREATE TABLE IF NOT EXISTS fp_inspection_result (missionId TEXT, pointId INTEGER, itemId INTEGER, itemValue INTEGER);',
			  		success: function(e){
			  			plus.sqlite.executeSql({
			  					name: 'first',
			  					sql: insert,
			  					success: function(e){
			  						console.log('195------------巡检项状态保存成功');
									sucCB(200)
			  					},
			  					fail: function(e){
			  						console.log('executeSql failed: '+JSON.stringify(e));
			  					}
			  				});
			  		},
			  		fail: function(e){
			  			console.log('executeSql failed: '+JSON.stringify(e));
			  		}
			  	});
		 },
		  // * 查询指定任务对应的巡更点保存的值
		  // * @param missionId 巡检任务id
		  // * @param pointId 巡检点id
		 itemFind(missionId, pointId, successFun) {
			 var inspectionItems = new Array();
			 const sql = "select itemId,itemValue from fp_inspection_result where missionId='"+missionId+"' and pointId="+pointId;
			 plus.sqlite.selectSql({
			 		name: 'first',
			 		sql: sql,
			 		success: function(e){
						console.log(e)
			 			// for (var i = 0; i < e.length; i++) {
			 			//     var data = e[i];
			 					 
			 			//     var inspectionItem ={};
			 			//     inspectionItem.itemId = data.itemId;
			 			//     inspectionItem.itemValue= data.itemValue;
			 					 
			 			//     inspectionItems.push(inspectionItem);
			 			// }
			 			// successFun(inspectionItems);
			 		},
			 		fail: function(e){
			 			console.log('executeSql failed: '+JSON.stringify(e));
			 		}
			 	});
		 },
		 // 根据nfcId查找巡检点
		 findPoint(id,type,successFun) {
		     var inspectionPointInAppVo ={};
			 var sql=''
			 if(type=='nfc'){
				 sql='SELECT p.point_id, p.point_name, p.nfc_id, p.qr_code from fp_inspection_point p WHERE p.nfc_id=\''+id+'\''
			 }else if(type=='qrcode'){
				 sql='SELECT p.point_id, p.point_name, p.nfc_id, p.qr_code from fp_inspection_point p WHERE p.qr_code=\''+id+'\''
			 }else{
				  sql='SELECT p.point_id, p.point_name, p.nfc_id, p.qr_code from fp_inspection_point p WHERE p.point_id=\''+id+'\''
			 }
			 plus.sqlite.selectSql({
			 		name: 'first',
			 		sql: sql,
			 		success: function(e){
			 			// if(datas.length==1){
			 			    var data = e[0];
			 			    inspectionPointInAppVo.pointId = data.point_id;
			 			    inspectionPointInAppVo.pointName= data.point_name;
			 			    inspectionPointInAppVo.nfcId = data.nfc_id;
			 			    inspectionPointInAppVo.qrCode = data.qr_code;
			 			// }
			 			successFun(inspectionPointInAppVo)
			 		},
			 		fail: function(e){
			 			console.log('executeSql failed: '+JSON.stringify(e));
			 		}
			 	});
		 },
		 // 根据巡检点id查找巡检项
		  findType(pointId, successFun) {
		     var inspectionPointItemTypeInAppVos = new Array();
		     var sql = "SELECT item.id,item.check_name,item.parent_full_name FROM fp_inspection_item item WHERE item.id IN (SELECT poi.inspection_item_id FROM fp_inspectionPoint_Item poi WHERE poi.point_id="+pointId+")";
		    plus.sqlite.selectSql({
		    		name: 'first',
		    		sql: sql,
		    		success: function(e){
		    			var datas = e;
						console.log(datas.length)
		    			for (var i = 0; i < datas.length; i++) {
		    			    var data = datas[i];
		    					 
		    			    var inspectionPointItemTypeInAppVo ={};
		    			    inspectionPointItemTypeInAppVo.itemId = data.id;
		    			    inspectionPointItemTypeInAppVo.itemName = data.check_name;
		    			    inspectionPointItemTypeInAppVo.typeName = data.parent_full_name;
		    					 
		    			    inspectionPointItemTypeInAppVos.push(inspectionPointItemTypeInAppVo)
		    			}
		    			successFun(inspectionPointItemTypeInAppVos)
		    		},
		    		fail: function(e){
		    			console.log('executeSql failed: '+JSON.stringify(e));
		    		}
		    	});
		 },
			 getItemCount(pointId, successFun) {
				 var itemCount = 0;
				 const sql = "SELECT item.id,item.check_name,item.parent_full_name FROM fp_inspection_item item WHERE item.id IN (SELECT poi.inspection_item_id FROM fp_inspectionPoint_Item poi WHERE poi.point_id=" + pointId + ")";
				 plus.sqlite.selectSql({
				 		name: 'first',
				 		sql: sql,
				 		success: function(e){
				 		for (var i = 0; i < e.length; i++) {
				 		    var data = e[i];
				 		}
				 		successFun(itemCount);
				 		},
				 		fail: function(e){
				 			console.log('executeSql failed: '+JSON.stringify(e));
				 		}
				 	});
		 },
		 // 查找
		 test(id,type,success) {
			 var result=''
		     //巡检点
		     var inspectionPoint ={};
		 var that=this
		     that.findPoint(id,type,function (data) {
		         inspectionPoint.pointId=data.pointId;
		         inspectionPoint.pointName=data.pointName;
		         inspectionPoint.nfcId=data.nfcId;
		         inspectionPoint.qrCode=data.qrCode;
		 
		         //获取到巡检点，再去查询对应的类别
		         that.findType(data.pointId,function (results) {
					 console.log(results.length)
		             var myMap = new Map();
		             for (var i = 0; i < results.length; i++) {
		                 var result = results[i];
		                 var itemId = result.itemId;
		                 var itemName = result.itemName;
		                 var typeName = result.typeName;
		 
		                 var item = {};
		                 item.itemId=itemId;
		                 item.itemName=itemName;
		 
		                 var itemList = myMap.get(typeName);
		                 if(typeof(itemList)=="undefined"){
		                     itemList = new Array();
		                 }
		                 itemList.push(item);
		                 myMap.set(result.typeName, itemList);
		             }
		 
		             // 巡检类别列表
		             var tempItemTypeList =new Array();
		             for (let [key, value] of myMap) {
		                 //巡检类别
		                 var itemType ={};
		                 itemType.typeName=key;
		                 itemType.itemList=value;
		 
		                 tempItemTypeList.push(itemType)
		             }
		             inspectionPoint.itemTypeList=tempItemTypeList;
					success(inspectionPoint)
					 // console.log(result)
		             // console.log(inspectionPoint);
		         });
		     });
			 // console.log(result)
			 // return result
		 },
		 
		 openDB(list1,list2,list3){
			 var is=plus.sqlite.isOpenDatabase({name:'first',path:'_doc/test.db'});
			 var that=this
			 console.log(is)
			 if(!is){
			 	plus.sqlite.openDatabase({
			 			name: 'first',
			 			path: '_doc/test.db',
			 			success: function(e){
							// if(!that.checkHasData()){
								console.log('打开数据库-------没数据-------开始导入');
								list1.forEach(item =>{
									that.populateDB(item.pointId,JSON.stringify(item.pointName),JSON.stringify(item.nfcId),JSON.stringify(item.qrCode))
								})
								list3.forEach(item =>{
									that.pointItemDataInit(item.pointId,item.inspectionItemId,item.status)
								})
								list2.forEach(item =>{
									that.itemDataInit(item.itemId,JSON.stringify(item.itemName),JSON.stringify(item.itemTypeName))
								})
							// }else{
							// 	console.log('打开数据库-------有数据-------不导入');
							// }
			 			},
			 			fail: function(e){
			 				console.log('openDatabase failed: '+JSON.stringify(e));
			 			}
			 		});
			 }else{
				 console.log('已打开')
				 // if(!that.checkHasData()){
				 	console.log('打开数据库-------没数据-------开始导入');
				 	list.forEach((item,index) =>{
				 		that.populateDB(item.pointId,JSON.stringify(item.pointName),JSON.stringify(item.nfcId),JSON.stringify(item.qrCode))
				 		item.itemTypeList.forEach((item2,index2) =>{
				 			item2.itemList.forEach((item3,index) =>{
				 				that.pointItemDataInit(item.pointId,item3.itemId,0)
				 				that.itemDataInit(item3.itemId,JSON.stringify(item3.itemName),JSON.stringify(item2.itemTypeName))
				 			})
				 		})
				 	})
				 // }else{
				 // 	console.log('打开数据库-------有数据-------不导入');
				 // }
			 }
		 },
		 checkOpen(){
			 var is=plus.sqlite.isOpenDatabase({name:'first',path:'_doc/test.db'});
			 var that=this
			 console.log(is)
			 if(!is){
				 plus.sqlite.openDatabase({
				 		name: 'first',
				 		path: '_doc/test.db'
				 	});
			 }
		 }
		 // checkHasData(){
			//  plus.sqlite.selectSql({
			//  				name: 'first',
			//  				sql: "select * from fp_inspection_point",
			//  				success: function(e){
			// 					console.log(e.length)
			// 					if(e.length>0){
			// 						return true
			// 					}else {
			// 						return false
			// 					}
			//  				},
			//  				fail: function(e){
			//  					console.log('executeSql failed: '+JSON.stringify(e));
			//  				}
			//  			});
		 // }
     }
 };