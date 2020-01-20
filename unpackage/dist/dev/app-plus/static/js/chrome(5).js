$(function () {

    var db = window.openDatabase("./fire7", "1.0", "PhoneGap Demo", 200000);
    if (!window.FileReader) {
        alert("Not supported by your browser!");
        return false;
    }

    //插入巡更点
    $("#save").click(function () {
        pointDataInit(4, "33", "44", "555");
    });
    //插入关联表
    $("#save2").click(function () {
        pointItemDataInit(4, 3, 0);
    });
    //插入巡检项
    $("#save3").click(function () {
        itemDataInit(3, "是否设置1", "消防/消火/消防1");
    });

    // 查找巡更点对应的巡更项数据
    $("#read").click(function () {
        
    });

    // 新增巡更任务测试
    $("#taskAdd").click(function () {
        taskAdd("aaasss", "2020-01-02 10:00:00", "2020-01-02 12:00:00", "4", "巡检任务第一单");
    });
    // 修改巡更任务测试
    $("#taskUpdate").click(function () {
        taskUpdate("aaasss", "2020-01-02 10:10:00", "2020-01-02 12:10:00", "巡检任务第3单");
    });
    // 查找巡更任务测试
    $("#taskFind").click(function () {
        console.log("查询巡更任务==========");
        taskFind("aaasss", function (result) {
            console.log("查询获取的巡检任务信息如下：missionId=" + result.missionId + ";remark=" + result.remark);
        });
    });

    //=======================
    $("#itemAdd").click(function () {
        itemAdd("aaasss", 1, 3, 1);
        itemAdd("aaasss", 1, 4, 0);
    });

    $("#itemFind").click(function () {
        itemFind("aaasss", 1, function (results) {

            for (var i = 0; i < results.length; i++) {
                var result = results[i];

                var itemId = result.itemId;
                var itemValue = result.itemValue;

                console.log("保存的巡更项如下：itemId=" + itemId + ";itemValue=" + itemValue);
            }

        });
    });

    //createTime, content, pictures, tenantId, checkId
    $("#troubleAdd").click(function () {
        troubleAdd("2020-01-03 10:10:10", "content", "pictures", "4", "aaasss");
    });
    $("#troubleFind").click(function () {
        troubleFind("aaasss", function (results) {

            for (var i = 0; i < results.length; i++) {
                var result = results[i];

                var checkId = result.checkId;
                var content = result.content;

                console.log("保存的隐患信息如下：checkId=" + checkId + ";content=" + content);
            }

        });
    });
    //=======================


    /**
     * 根据nfcid查询巡检点的基础数据
     * @param nfcId
     */
    function test(nfcId) {
        //巡更点
        var inspectionPoint = {};

        findPoint(nfcId, function (data) {
            inspectionPoint.pointId = data.pointId;
            inspectionPoint.pointName = data.pointName;
            inspectionPoint.nfcId = data.nfcId;
            inspectionPoint.qrCode = data.qrCode;

            //获取到巡检点，再去查询对应的类别
            findType(data.pointId, function (results) {

                var myMap = new Map();
                for (var i = 0; i < results.length; i++) {
                    var result = results[i];
                    var itemId = result.itemId;
                    var itemName = result.itemName;
                    var typeName = result.typeName;

                    var item = {};
                    item.itemId = itemId;
                    item.itemName = itemName;

                    var itemList = myMap.get(typeName);
                    if (typeof(values) == "undefined") {
                        itemList = new Array();
                    }
                    itemList.push(item);
                    myMap.set(result.typeName, itemList);
                }

                // 巡更类别列表
                var tempItemTypeList = new Array();
                for (let [key, value] of myMap) {
                    //巡更类别
                    var itemType = {};
                    itemType.typeName = key;
                    itemType.itemList = value;

                    tempItemTypeList.push(itemType)
                }
                inspectionPoint.itemTypeList = tempItemTypeList;
                console.log("inspectionPoint=" + JSON.stringify(inspectionPoint));
            });
        });
    }

    /**
     * 新建巡检任务
     * @param missionId 任务id（前端生成uuid）
     * @param startTime 开始时间，2019-12-28 12:20:10格式
     * @param endTime 结束时间，2019-12-28 12:20:10格式
     * @param tenantId 租户id
     * @param remark 巡检内容
     */
    function taskAdd(missionId, startTime, endTime, tenantId, remark) {
        db.transaction(populateDB, errorCB, successCB);
        // 填充数据库
        function populateDB(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS fp_inspection_mission (missionId TEXT PRIMARY KEY, startTime TEXT, endTime TEXT, tenantId TEXT, remark TEXT);");
            const insert = 'INSERT INTO fp_inspection_mission(missionId, startTime, endTime, tenantId, remark) VALUES(?,?,?,?,?)';
            tx.executeSql(insert, [missionId, startTime, endTime, tenantId, remark]);
        }

        // 事务执行出错后调用的回调函数
        function errorCB(err) {
            console.log("插入巡更任务发生错误: ", err);
        }

        // 事务执行成功后调用的回调函数
        function successCB() {
            console.log("插入巡更任务成功!");
        }
    }

    /**
     * 根据任务id修改任务
     * @param missionId 需要修改的任务对应的任务id
     * @param startTime 开始时间
     * @param endTime 结束时间
     * @param remark 巡更内容
     */
    function taskUpdate(missionId, startTime, endTime, remark) {
        db.transaction(populateDB, errorCB, successCB);
        // 填充数据库
        function populateDB(tx) {
            const updateStr = "update fp_inspection_mission set startTime='" + startTime + "', endTime='" + endTime + "', remark='" + remark + "' where missionId='" + missionId + "'";
            console.log("taskUpdate更新语句=" + updateStr);
            tx.executeSql(updateStr);
        }

        // 事务执行出错后调用的回调函数
        function errorCB(err) {
            console.log("更新巡更任务发生错误: ", err);
        }

        // 事务执行成功后调用的回调函数
        function successCB() {
            console.log("更新巡更任务成功!");
        }
    }

    /**
     * 新增隐患
     * @param missionId
     */
    function troubleAdd(createTime, content, pictures, tenantId, checkId) {
        db.transaction(populateDB, errorCB, successCB);
        // 填充数据库
        function populateDB(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS fp_trouble_record (createTime TEXT, content TEXT, pictures TEXT, tenantId TEXT,  checkId TEXT);");
            const insert = "INSERT INTO fp_trouble_record(createTime, content, pictures, tenantId, checkId) VALUES('" + createTime + "','" + content + "','" + pictures + "','" + tenantId + "','" + checkId + "')";
            tx.executeSql(insert);
        }

        // 事务执行出错后调用的回调函数
        function errorCB(err) {
            console.log("新增隐患发生错误: ", err);
        }

        // 事务执行成功后调用的回调函数
        function successCB() {
            console.log("新增隐患成功!");
        }
    }

    /**
     * 查询隐患
     * @param missionId
     */
    function troubleFind(missionId, successFun) {
        var troubles = new Array();
        var sql = "SELECT createTime, content, pictures, tenantId, checkId from fp_trouble_record r WHERE r.checkId='" + missionId + "'";
        db.transaction(function (tx) {
            tx.executeSql(sql, [], function (tx, results) {
                var datas = results.rows;
                for (var i = 0; i < datas.length; i++) {
                    var data = datas[i];

                    var trouble = {};
                    trouble.createTime = data.createTime;
                    trouble.content = data.content;
                    trouble.pictures = data.pictures;
                    trouble.tenantId = data.tenantId;
                    trouble.checkId = data.checkId;
                    troubles.push(trouble);

                }
                successFun(troubles)
            }, null);
        });
    }

    /**
     * 查询巡检任务
     * missionId -- 巡检任务id
     */
    function taskFind(missionId, successFun) {
        var inspectionMission = {};
        var sql = 'SELECT m.missionId, m.startTime, m.endTime, m.tenantId, m.remark from fp_inspection_mission m WHERE m.missionId=?';
        db.transaction(function (tx) {
            tx.executeSql(sql, [missionId], function (tx, results) {
                var datas = results.rows;
                if (datas.length = 1) {
                    var data = datas[0];
                    inspectionMission.missionId = data.missionId;
                    inspectionMission.startTime = data.startTime;
                    inspectionMission.endTime = data.endTime;
                    inspectionMission.tenantId = data.tenantId;
                    inspectionMission.remark = data.remark;
                }
                successFun(inspectionMission)
            }, null);
        });
    }

    /**
     * 保存巡检点下的巡检项
     * @param missionId 任务id
     * @param pointId 巡检点id
     * @param itemId 巡检项id
     * @param itemValue 巡检项的值（0-正常 1-异常）
     */
    function itemAdd(missionId, pointId, itemId, itemValue) {
        db.transaction(populateDB, errorCB, successCB);
        // 填充数据库
        function populateDB(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS fp_inspection_result (missionId TEXT, pointId INTEGER, itemId INTEGER, itemValue INTEGER);");
            const insert = "INSERT INTO fp_inspection_result(missionId, pointId, itemId, itemValue) VALUES('" + missionId + "'," + pointId + "," + itemId + "," + itemValue + ")";
            tx.executeSql(insert);
        }

        // 事务执行出错后调用的回调函数
        function errorCB(err) {
            console.log("插入巡更任务发生错误: ", err);
        }

        // 事务执行成功后调用的回调函数
        function successCB() {
            console.log("插入巡更任务成功!");
        }
    }

    /**
     * 查询指定任务对应的巡更点保存的值
     * @param missionId 巡检任务id
     * @param pointId 巡检点id
     */
    function itemFind(missionId, pointId, successFun) {
        var inspectionItems = new Array();
        const sql = "select itemId,itemValue from fp_inspection_result where missionId='" + missionId + "' and pointId=" + pointId;
        db.transaction(function (tx) {
            tx.executeSql(sql, [], function (tx, results) {
                var datas = results.rows;
                for (var i = 0; i < datas.length; i++) {
                    var data = datas[i];

                    var inspectionItem = {};
                    inspectionItem.itemId = data.itemId;
                    inspectionItem.itemValue = data.itemValue;

                    inspectionItems.push(inspectionItem);
                }
                successFun(inspectionItems);
            }, null);
        });
    }

    // 根据nfcId查找巡更点
    function findPoint(nfc_id, successFun) {
        var inspectionPointInAppVo = {};
        var sql = 'SELECT p.point_id, p.point_name, p.nfc_id, p.qr_code from fp_inspection_point p WHERE p.nfc_id=\'' + nfc_id + '\'';
        db.transaction(function (tx) {
            tx.executeSql(sql, [], function (tx, results) {
                var datas = results.rows;
                if (datas.length = 1) {
                    var data = datas[0];
                    inspectionPointInAppVo.pointId = data.point_id;
                    inspectionPointInAppVo.pointName = data.point_name;
                    inspectionPointInAppVo.nfcId = data.nfc_id;
                    inspectionPointInAppVo.qrCode = data.qr_code;
                }
                successFun(inspectionPointInAppVo)
            }, null);
        });
    }

    // 根据巡更点id查找巡更项
    function findType(pointId, successFun) {
        var inspectionPointItemTypeInAppVos = new Array();
        var sql = 'SELECT item.id,item.check_name,item.parent_full_name FROM fp_inspection_item item LEFT JOIN fp_inspectionPoint_Item poi ON poi.inspection_item_id=item.id WHERE poi.point_id=\'' + pointId + '\'';
        db.transaction(function (tx) {
            tx.executeSql(sql, [], function (tx, results) {
                var datas = results.rows;
                for (var i = 0; i < datas.length; i++) {
                    var data = datas[i];

                    var inspectionPointItemTypeInAppVo = {};
                    inspectionPointItemTypeInAppVo.itemId = data.id;
                    inspectionPointItemTypeInAppVo.itemName = data.check_name;
                    inspectionPointItemTypeInAppVo.typeName = data.parent_full_name;

                    inspectionPointItemTypeInAppVos.push(inspectionPointItemTypeInAppVo)
                }
                successFun(inspectionPointItemTypeInAppVos)
            }, null);
        });
    }

    /**
     * 根据接口返回的数据初始化本地数据库（巡更点表）
     * @param point_id 巡检点id
     * @param point_name 巡检点名称
     * @param nfc_id nfcid
     * @param qr_code 二维码值
     */
    function pointDataInit(point_id, point_name, nfc_id, qr_code) {
        db.transaction(populateDB, errorCB, successCB);
        // 填充数据库
        function populateDB(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS fp_inspection_point (point_id INTEGER, point_name TEXT, nfc_id TEXT, qr_code TEXT);");
            const insert = 'INSERT INTO fp_inspection_point(point_id, point_name, nfc_id, qr_code) VALUES(?,?,?,?)';
            tx.executeSql(insert, [point_id, point_name, nfc_id, qr_code]);
        }

        // 事务执行出错后调用的回调函数
        function errorCB(err) {
            console.log("插入巡检点数据发生错误: ", err);
        }

        // 事务执行成功后调用的回调函数
        function successCB() {
            console.log("插入巡检点数据成功!");
        }
    }

    // 根据接口返回的数据初始化本地数据库（巡更点和巡更项关联表）
    // 3个参数
    function pointItemDataInit(point_id, inspection_item_id, status) {
        db.transaction(populateDB, errorCB, successCB);
        // 填充数据库
        function populateDB(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS fp_inspectionPoint_Item (point_id INTEGER, inspection_item_id INTEGER, status INTEGER);");
            const insert = 'INSERT INTO fp_inspectionPoint_Item(point_id, inspection_item_id, status) VALUES(?,?,?)';
            tx.executeSql(insert, [point_id, inspection_item_id, status]);
        }

        // 事务执行出错后调用的回调函数
        function errorCB(err) {
            console.log("插入巡更点和巡更项关联表发生错误: ", err);
        }

        // 事务执行成功后调用的回调函数
        function successCB() {
            console.log("插入巡更点和巡更项关联表成功!");
        }
    }

    // 根据接口返回的数据初始化本地数据库（巡更项表）
    // 3个参数
    function itemDataInit(id, check_name, parent_full_name) {
        db.transaction(populateDB, errorCB, successCB);
        // 填充数据库
        function populateDB(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS fp_inspection_item (id INTEGER, check_name TEXT, parent_full_name TEXT);");
            const insert = 'INSERT INTO fp_inspection_item(id, check_name, parent_full_name) VALUES(?,?,?)';
            tx.executeSql(insert, [id, check_name, parent_full_name]);
        }

        // 事务执行出错后调用的回调函数
        function errorCB(err) {
            console.log("插入巡更项数据发生错误: ", err);
        }

        // 事务执行成功后调用的回调函数
        function successCB() {
            console.log("插入巡更项数据成功!");
        }
    }


    /**
     * 获取指定巡检点拥有的巡检项总数
     * @param pointId 巡检点
     * @param successFun
     */
    function getItemCount(pointId, successFun) {
        var itemCount = 0;
        const sql = "SELECT COUNT(*) as itemCount FROM fp_inspection_item item WHERE item.id IN (SELECT poi.inspection_item_id FROM fp_inspectionPoint_Item poi WHERE poi.point_id=" + pointId + ")";
        db.transaction(function (tx) {
            tx.executeSql(sql, [], function (tx, results) {
                var datas = results.rows;
                if (datas.length = 1) {
                    itemCount = datas[0].itemCount;
                }
                successFun(itemCount);
            }, null);
        });
    }
});