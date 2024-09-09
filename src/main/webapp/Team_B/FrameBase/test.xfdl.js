(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("test", this);
            obj._setContents("<ColumnInfo><Column id=\"department_id\" type=\"INT\" size=\"256\"/><Column id=\"department\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","88","21","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea1","38","80","132","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea2","189","80","132","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","TextArea1","value","test","department_id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","TextArea2","value","test","department");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("test.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var strSvcId    = "testNexa"; //콜백 서비스명
        	var strSvcUrl   = "svc::/test/testNexa.do"; //호출 URL
        	var inData      = ""; //컨트롤러가 받을 데이터
        	var outData     = "test=test"; //컨트롤러에서 가져올 데이터
        	var strArg      = ""; //컨트롤러가 받을 데이터의 자료형 (Request 문자 parameter)
        	var callBackFnc = "fnCallback"; //콜백 후 실행 할 함수
        	var isAsync     = true; // 동기/비동기 선택

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	this.test.setColumn(0, "department_id", obj.getColumn(obj.rowposition,"department_id"));
        	this.test.setColumn(0, "department", obj.getColumn(obj.rowposition,"department"));

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
