var React = require('react');

var TaxResultPanel = function(props) {
  	var result = props.result;

  	if( !result ){
  		return <div></div>
  	}
  	return (
  		<div>	
  			<div className="result-card center result-card-white">
  				<p>税后实收：<span className="highlight">{result.shishou}</span></p>
  				<p>共缴纳个税：<span className="highlight">{result.jiaoshuie}</span></p>
  				<img src={require('../imgs/cry.jpg')} className="result-img" />
  			</div>
		    <div className="result-card">
		    	<div className="weui_cells_title">个税</div>
	  			<div className="weui_cells">
		            <div className="weui_cell">
		                <div className="weui_cell_bd weui_cell_primary">
		                    <p>应缴个税</p>
		                </div>
		                <div className="weui_cell_ft"><span className="highlight">{result.jiaoshuie}</span>元</div>
		            </div>
		            <div className="weui_cell">
		                <div className="weui_cell_bd weui_cell_primary">
		                    <p>纳税额</p>
		                </div>
		                <div className="weui_cell_ft"><span className="highlight">{result.nashuie}</span>元</div>
		            </div>
		            <div className="weui_cell">
		                <div className="weui_cell_bd weui_cell_primary">
		                    <p>税后实收</p>
		                </div>
		                <div className="weui_cell_ft"><span className="highlight">{result.shishou}</span>元</div>
		            </div>
		        </div>
		    </div>

  			<div className="result-card">
	  			<div className="weui_cells_title">社保个人缴纳({result.shebao}元)</div>
	  			<div className="weui_cells">
		            <div className="weui_cell">
		                <div className="weui_cell_bd weui_cell_primary">
		                    <p>养花保险</p>
		                </div>
		                <div className="weui_cell_ft"><span className="highlight">{result.yanglao}</span>元</div>
		            </div>
		            <div className="weui_cell">
		                <div className="weui_cell_bd weui_cell_primary">
		                    <p>医疗保险</p>
		                </div>
		                <div className="weui_cell_ft"><span className="highlight">{result.yiliao}</span>元</div>
		            </div>
		            <div className="weui_cell">
		                <div className="weui_cell_bd weui_cell_primary">
		                    <p>失业保险</p>
		                </div>
		                <div className="weui_cell_ft"><span className="highlight">{result.shiye}</span>元</div>
		            </div>
		        </div>
		    </div>

		    <div className="result-card">
		    	<div className="weui_cells_title">公积金({result.gongjijin*2}元)</div>
	  			<div className="weui_cells">
		            <div className="weui_cell">
		                <div className="weui_cell_bd weui_cell_primary">
		                    <p>个人缴纳公积金</p>
		                </div>
		                <div className="weui_cell_ft"><span className="highlight">{result.gongjijin}</span>元</div>
		            </div>
		        </div>
		    </div>

		    <div className="result-card center qrcode-wrap">
  				<img src={require('../imgs/1770.tm.png')} className="result-img" />
  			</div>
	    </div>
  	);
};

module.exports = TaxResultPanel;
