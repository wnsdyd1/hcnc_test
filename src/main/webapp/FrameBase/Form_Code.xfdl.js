(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Code");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ALL</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">CODE</Col><Col id=\"CODE_NM\">코드</Col></Row><Row><Col id=\"CODE\">CODE_NM</Col><Col id=\"CODE_NM\">코드명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeMstList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeMst", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"PT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeDtlList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Search","360","51","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","35","50","115","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","160","50","190","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","35","102","495","158",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_CodeMstList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code","35","285","165","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CodeNm","211","285","178","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","400","283","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","450","52","80","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Code","35","252","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CodeNm","210","252","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("코드명");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","140","333","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search00","895","51","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search00","570","50","115","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search00","695","50","190","42",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code00","570","285","165","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CodeNm00","746","285","178","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save00","935","283","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add00","985","52","80","39",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Code00","570","252","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CodeNm00","745","252","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("코드명");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete00","675","333","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst00","570","102","495","158",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_CodeDtlList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("bind_01","cmb_Search","value","ds_Search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_02","edt_Search","value","ds_Search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_03","edt_Code","value","ds_CodeMst","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_04","edt_CodeNm","value","ds_CodeMst","CODE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cmb_Search00","value","ds_SearchDtl","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_Search00","value","ds_SearchDtl","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_Code00","value","ds_CodeDtl","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_CodeNm00","value","ds_CodeDtl","CODE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Code.xfdl", function() {
        //처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode == -1)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectCodeMst":
        		// 조회 시 콜백 처리
        			break;

        		case "saveCodeMst":
        		// 저장 시 콜백 처리
        			this.fnSearch();
        			break;

        		case "deleteCodeMst":
        		// 삭제 시 콜백 처리
        			this.fnSearch();
        			break;

        		case "saveCodeDtl":
        		// 저장 시 콜백 처리
        			this.fnSearch();
        			break;

        		case "deleteCodeDtl":
        		// 삭제 시 콜백 처리
        			this.fnSearch();
        			break;

        		default :
        		// 기본
        			break;
        	}
        };

        this.fnSearch = function(){
        	console.log("cmb_Search = " + this.ds_Search.getColumn(0,"SEARCH_TYPE"));
        	console.log("edt_Search = " + this.ds_Search.getColumn(0,"SEARCH_WORD"));
        	//alert("조회 버튼 클릭")

        	// 여러개일때는 , 쓰지않고 띄어쓰기 사용함.
        	var strSvcId    = "selectCodeMst"; //콜백 서비스명
        	var strSvcUrl   = "svc::selectCodeMst.do"; //호출 URL
        	var inData      = "ds_Search=ds_Search"; //컨트롤러가 받을 데이터
        	var outData     = "ds_CodeMstList=ds_CodeMstList"; //컨트롤러에서 가져올 데이터
        	var strArg      = ""; //컨트롤러가 받을 데이터의 자료형 (Request 문자 parameter)
        	var callBackFnc = "fnCallback"; //콜백 후 실행 할 함수
        	var isAsync     = true; // 동기/비동기 선택

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        // 세부코드 조회 -----------------------------
        this.fnSearchDtl = function(){
        	console.log("cmb_Search = " + this.ds_SearchDtl.getColumn(0,"SEARCH_TYPE"));
        	console.log("edt_Search = " + this.ds_SearchDtl.getColumn(0,"SEARCH_WORD"));

        	if(this.ds_SearchDtl.getColumn(0,"PT_CODE")== ""
        		|| this.ds_SearchDtl.getColumn(0,"PT_CODE") == "undefined"
        		|| this.ds_SearchDtl.getColumn(0,"PT_CODE") == null){
        		alert("마스터 코드를 선택해주세요.")
        		return;
        	}
        	//alert("조회 버튼 클릭")

        	// 여러개일때는 , 쓰지않고 띄어쓰기 사용함.
        	var strSvcId    = "selectCodeDtl"; //콜백 서비스명
        	var strSvcUrl   = "svc::selectCodeDtl.do"; //호출 URL
        	var inData      = "ds_SearchDtl=ds_SearchDtl"; //컨트롤러가 받을 데이터
        	var outData     = "ds_CodeDtlList=ds_CodeDtlList"; //컨트롤러에서 가져올 데이터
        	var strArg      = ""; //컨트롤러가 받을 데이터의 자료형 (Request 문자 parameter)
        	var callBackFnc = "fnCallback"; //콜백 후 실행 할 함수
        	var isAsync     = true; // 동기/비동기 선택

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }






        this.edt_Search_onchanged = function(obj,e)

        {

        };

        this.btn_Search_onclick = function(obj,e)
        {
        		this.fnSearch();
        };

        this.Form_Code_onload = function(obj,e)
        {
        	this.ds_Search.setColumn(0,"SEARCH_TYPE","ALL");

        	this.edt_Code.set_readonly(true);
        	this.edt_CodeNm.set_readonly(true);
        	this.btn_Save.set_enable(false);
        	this.btn_Delete.set_enable(false);
        };


        this.btn_Add_onclick = function(obj,e)
        {
        	this.ds_CodeMst.setColumn(0,"CODE","");
        	this.ds_CodeMst.setColumn(0,"CODE_NM","");

        	this.edt_Code.set_readonly(false);
        	this.edt_CodeNm.set_readonly(false);
        	this.btn_Save.set_enable(true);
        	this.btn_Delete.set_enable(false);
        };

        this.btn_Save_onclick = function(obj,e)
        {
        	if(this.ds_CodeMst.getColumn(0,"CODE") == ''
        		|| this.ds_CodeMst.getColumn(0,"CODE") == 'undefined'
        		|| this.ds_CodeMst.getColumn(0,"CODE") == null){
        	alert("코드를 입력해주세요.")
        	return;
        	}

        	if(this.ds_CodeMst.getColumn(0,"CODE_NM") == ''
        		|| this.ds_CodeMst.getColumn(0,"CODE_NM") == 'undefined'
        		|| this.ds_CodeMst.getColumn(0,"CODE_NM") == null){
        	alert("코드명을 입력해주세요.")
        	return;
        	}

        	var strSvcId    = "saveCodeMst";
        	var strSvcUrl   = "svc::saveCodeMst.do";
        	var inData      = "ds_CodeMst=ds_CodeMst";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        this.btn_Delete_onclick = function(obj,e)
        {
        	var strSvcId    = "deleteCodeMst";
        	var strSvcUrl   = "svc::deleteCodeMst.do";
        	var inData      = "ds_CodeMst=ds_CodeMst";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 왼쪽 표
        this.ds_CodeMstList_onrowposchanged = function(obj,e)
        {
        	this.edt_Code.set_readonly(true);
        	this.edt_CodeNm.set_readonly(false);
        	this.btn_Save.set_enable(true);
        	this.btn_Delete.set_enable(true);

        	this.ds_CodeMst.setColumn(0, "CODE", obj.getColumn(obj.rowposition,"CODE"));
        	this.ds_CodeMst.setColumn(0, "CODE_NM", obj.getColumn(obj.rowposition,"CODE_NM"));
        	// obj = this.ds_CodeMst 가 됨.

        	this.ds_SearchDtl.setColumn(0, "PT_CODE", obj.getColumn(obj.rowposition,"CODE"));
        	this.ds_CodeDtl.setColumn(0, "PT_CODE", obj.getColumn(obj.rowposition,"CODE"));
        };

        // 오른쪽 표
        this.ds_CodeDtlList_onrowposchanged = function(obj,e)
        {
        	this.ds_CodeDtl.setColumn(0, "CODE", obj.getColumn(obj.rowposition,"CODE"));
        	this.ds_CodeDtl.setColumn(0, "CODE_NM", obj.getColumn(obj.rowposition,"CODE_NM"));
        	this.ds_CodeDtl.setColumn(0, "PT_CODE", obj.getColumn(obj.rowposition,"PT_CODE"))

        	this.ds_SearchDtl.setColumn(0, "PT_CODE", obj.getColumn(obj.rowposition,"CODE"));
        	this.ds_CodeDtl.setColumn(0, "PT_CODE", obj.getColumn(obj.rowposition,"CODE"));
        	// obj = this.ds_CodeMst 가 됨.

        	this.edt_Code00.set_readonly(false);
        	this.edt_CodeNm00.set_readonly(false);
        	this.btn_Save00.set_enable(true);
        	this.btn_Delete00.set_enable(true);
        };





        // 오른쪽 세부 코드 버튼 이벤트 --------------------------

        this.btn_Search00_onclick = function(obj,e)
        {
        	this.fnSearchDtl();
        };
        // 여기서부터 수정 및 추가 필요
        this.btn_Add00_onclick = function(obj,e)
        {
        	this.ds_CodeDtl.setColumn(0,"CODE","");
        	this.ds_CodeDtl.setColumn(0,"CODE_NM","");

        	this.edt_Code.set_readonly(false);
        	this.edt_CodeNm.set_readonly(false);
        	this.btn_Save.set_enable(true);
        	this.btn_Delete.set_enable(false);
        };

        this.btn_Save00_onclick = function(obj,e)
        {
        	if(this.ds_CodeDtl.getColumn(0,"CODE") == ''
        		|| this.ds_CodeDtl.getColumn(0,"CODE") == 'undefined'
        		|| this.ds_CodeDtl.getColumn(0,"CODE") == null){
        	alert("코드를 입력해주세요.")
        	return;
        	}

        	if(this.ds_CodeDtl.getColumn(0,"CODE_NM") == ''
        		|| this.ds_CodeDtl.getColumn(0,"CODE_NM") == 'undefined'
        		|| this.ds_CodeDtl.getColumn(0,"CODE_NM") == null){
        	alert("코드명을 입력해주세요.")
        	return;
        	}

        	var strSvcId    = "saveCodeDtl";
        	var strSvcUrl   = "svc::saveCodeDtl.do";
        	var inData      = "ds_CodeDtl=ds_CodeDtl";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.btn_Delete00_onclick = function(obj,e)
        {
        	var strSvcId    = "deleteCodeDtl";
        	var strSvcUrl   = "svc::deleteCodeDtl.do";
        	var inData      = "ds_CodeDtl=ds_CodeDtl";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Code_onload,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.edt_Search.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.btn_Search00.addEventHandler("onclick",this.btn_Search00_onclick,this);
            this.edt_Search00.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.btn_Save00.addEventHandler("onclick",this.btn_Save00_onclick,this);
            this.btn_Add00.addEventHandler("onclick",this.btn_Add00_onclick,this);
            this.btn_Delete00.addEventHandler("onclick",this.btn_Delete00_onclick,this);
            this.ds_CodeMstList.addEventHandler("onrowposchanged",this.ds_CodeMstList_onrowposchanged,this);
            this.ds_CodeDtlList.addEventHandler("onrowposchanged",this.ds_CodeDtlList_onrowposchanged,this);
        };
        this.loadIncludeScript("Form_Code.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
