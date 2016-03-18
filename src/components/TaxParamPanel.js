var React = require('react');

var TaxParamPanel = function(props) {
  	var params = props.params;

  	return (
  		<div>	
  			<div className="weui_cells_title">工伤险和失业险个人不需要缴纳。</div>
  			<div className="weui_cells weui_cells_form">
			  	<div className="weui_cell">
		            <div className="weui_cell_hd"><label className="weui_label">月薪</label></div>
		            <div className="weui_cell_bd weui_cell_primary">
		                <input className="weui_input" type="number" pattern="[0-9]*" onChange={function(evt){props.handleInputChange('yuexin', evt)}} defaultValue={params.yuexin} />
		            </div>
		        </div>
		   	</div>
  			<div className="weui_cells_title">以下单位为%</div>
		   	<div className="weui_cells weui_cells_form">
			  	<div className="weui_cell">
		            <div className="weui_cell_hd"><label className="weui_label">养老</label></div>
		            <div className="weui_cell_bd weui_cell_primary">
		                <input className="weui_input" type="number" pattern="[0-9]*" onChange={function(evt){props.handleInputChange('yanglao', evt)}} defaultValue={params.yanglao} />
		            </div>
		        </div>
			  	<div className="weui_cell">
		            <div className="weui_cell_hd"><label className="weui_label">医疗</label></div>
		            <div className="weui_cell_bd weui_cell_primary">
		                <input className="weui_input" type="number" pattern="[0-9]*" onChange={function(evt){props.handleInputChange('yiliao', evt)}} defaultValue={params.yiliao} />
		            </div>
		        </div>
			  	<div className="weui_cell">
		            <div className="weui_cell_hd"><label className="weui_label">失业</label></div>
		            <div className="weui_cell_bd weui_cell_primary">
		                <input className="weui_input" type="number" pattern="[0-9.]*" onChange={function(evt){props.handleInputChange('shiye', evt)}} defaultValue={params.shiye} />
		            </div>
		            {
		            	!props.valid?
		            	<div className="weui_cell_ft">
		                    <i className="weui_icon_warn"></i>
		                </div>:""
		            }
		        </div>
			  	<div className="weui_cell">
		            <div className="weui_cell_hd"><label className="weui_label">公积金</label></div>
		            <div className="weui_cell_bd weui_cell_primary">
		                <input className="weui_input" type="number" pattern="[0-9]*" onChange={function(evt){props.handleInputChange('gongjijin', evt)}} defaultValue={params.gongjijin} />
		            </div>
		        </div>
		    </div>


  			<div className="weui_cells_title">上一年月平均工资</div>
		   	<div className="weui_cells weui_cells_form">
			  	<div className="weui_cell">
		            <div className="weui_cell_hd"><label className="weui_label">全市</label></div>
		            <div className="weui_cell_bd weui_cell_primary">
		                <input className="weui_input" type="number" pattern="[0-9]*" onChange={function(evt){props.handleInputChange('lastYearBalance', evt)}} defaultValue={params.lastYearBalance} />
		            </div>
		        </div>
			  	<div className="weui_cell">
		            <div className="weui_cell_hd"><label className="weui_label">个人</label></div>
		            <div className="weui_cell_bd weui_cell_primary">
		                <input className="weui_input" type="number" pattern="[0-9]*" onChange={function(evt){props.handleInputChange('lastYearYuexin', evt)}} defaultValue={params.lastYearYuexin} />
		            </div>
		        </div>
		   	</div>

	        <div className="weui_btn_area">
	            <a className="weui_btn weui_btn_primary" href="javascript:" onClick={props.valid?props.calculateResult:""}>计算</a>
	        </div>
	    </div>
  	);
		    // <div className="weui_cells_tips">底部说明文字底部说明文字</div>
};

module.exports = TaxParamPanel;
