 import  global from './global.js';
 export const nfc = {
     created() {
		 
     },
     methods: {
         test_nfc() {
			 var that=this
			 var main = plus.android.runtimeMainActivity();
			 			 var pkName = main.getPackageName(); 
			  var Intent = plus.android.importClass('android.content.Intent');  
			  var Activity = plus.android.importClass('android.app.Activity');  
			  var PendingIntent = plus.android.importClass('android.app.PendingIntent');  
			  var IntentFilter = plus.android.importClass('android.content.IntentFilter');  
			  var NfcAdapter = plus.android.importClass('android.nfc.NfcAdapter');  
			 var nfcAdapter = NfcAdapter.getDefaultAdapter(main);
			 
			 if(nfcAdapter == null){
			 global.showToast("设备不支持NFC！");
			 return;
			 }
			 if (!nfcAdapter.isEnabled()) {
			  global.showToast("请先启用NFC功能！");
			 			// var Intent = plus.android.importClass("android.content.Intent"); 
			 			// var intent = new Intent("android.settings.APP_NOTIFICATION_SETTINGS");
			 			// intent.putExtra("android.provider.extra.APP_PACKAGE", pkName); 
			 			// main.startActivity(intent); 
			 return;
			 }
			  var intent = new Intent(main, main.getClass());  
			  intent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);  
			  var pendingIntent = PendingIntent.getActivity(main, 0, intent, 0);  
			  var ndef = new IntentFilter("android.nfc.action.TECH_DISCOVERED");  
			  ndef.addDataType("*/*");  
			  var intentFiltersArray = [ndef];  
			  var techListsArray = [["android.nfc.tech.IsoDep"], ["android.nfc.tech.NfcA"], ["android.nfc.tech.NfcB"], ["android.nfc.tech.NfcF"], ["android.nfc.tech.Nfcf"], ["android.nfc.tech.NfcV"], ["android.nfc.tech.NdefFormatable"], ["android.nfc.tech.MifareClassi"], ["android.nfc.tech.MifareUltralight"]];  
			 			plus.globalEvent.addEventListener("newintent",  
			          function() {  
			              setTimeout(that.handle_nfc_data,1000);  
			          }, false);  
			 
			  plus.globalEvent.addEventListener("pause", function(e) {  
			    if (nfcAdapter) {  
			      nfcAdapter.disableForegroundDispatch(main);  
			    }  
			  }, false);  
			 
			  plus.globalEvent.addEventListener("resume", function(e) {  
			    if (nfcAdapter) {  
			      nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray, techListsArray);  
			    }  
			  }, false);  
			  nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray, techListsArray); 
         },
		 handle_nfc_data(){
		       var main = plus.android.runtimeMainActivity();  
		       var runtimeIntent = main.getIntent();  
		       var b = runtimeIntent.getExtras();  
		       plus.android.importClass(b);  
		       var set = b.keySet();  
		       plus.android.importClass(set);  
		       var sb;  
		       var i = set.iterator();  
		       plus.android.importClass(i);  
		       var hasNest = i.hasNext();  
		       var NfcA = plus.android.importClass("android.nfc.tech.NfcA");  
		       var IsoDep = plus.android.importClass("android.nfc.tech.IsoDep");  
		       var Tag = plus.android.importClass("android.nfc.Tag");  
		       while (hasNest) {  
		           var key = i.next();  
		           var v = b.get(key);  
		           if(v instanceof NfcA){  
		               var atqa = v.getAtqa();  
		               var sak = v.getSak();  
		               var tag = g.getTag();  
		               plus.android.importClass(tag);  
		               var techList = tag.getTechList();  
		           }else if(v instanceof IsoDep){  
		               var tag = g.getTag();  
		               plus.android.importClass(tag);  
		               var techList = tag.getTechList();  
		           }else if(v instanceof Tag){  
		               var tag = v;  
		               var techList = tag.getTechList();  
		           }  
				   this.$emit('getv',v)
		           sb = key + "=" + v + "\n";  
		           hasNest = i.hasNext();  
		       }  
		   }
     }
 };
		