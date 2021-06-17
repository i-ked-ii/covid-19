import React from 'react'
import PropTypes from 'prop-types'

const Counter = (props) => {
    const {className, recovered, cases, newcases, deaths, lastUpdate, text} = props;
    return (
        
        <div className={`counter-inner-box ${className}`}>
            <div className="text-center">
                <h6 className="small-title">CORONAVIRUS (COVID-19)</h6>
                <h2>ผู้ป่วยยืนยัน (คน)</h2>
            </div>
            <div className="row">
                {
                    cases && (<div className="col counter-item">
                        <div className="single-counter-box">
                            <h3 className="odometer odometer-auto-theme">
                                <div className="odometer-inside">
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">{cases}</span>
                                    </span>
                                </div>
                            </h3>
                            <p>Confirmed Cases - cumulative total</p>
                        </div>
                    </div>)
                }
                {
                    newcases && (<div className="col counter-item">
                        <div className="single-counter-box">
                            <h3 className="odometer odometer-auto-theme">
                                <div className="odometer-inside">
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">{newcases}</span>
                                    </span>
                                </div>
                            </h3>
                            <p>Confirmed Cases - cumulative total</p>
                        </div>
                    </div>)
                }
                {
                    recovered && (<div className="col counter-item">
                        <div className="single-counter-box">
                            <h3 className="odometer odometer-auto-theme">
                                <div className="odometer-inside">
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">{recovered}</span>
                                    </span>
                                </div>
                            </h3>
                            <p>Recovered Cases</p>
                        </div>
                    </div>)
                }
                {
                    deaths && (<div className="col counter-item">
                        <div className="single-counter-box">
                            <h3 className="odometer odometer-auto-theme">
                                <div className="odometer-inside">
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">{deaths}</span>
                                    </span>
                                </div>
                            </h3>
                            {/* เสียชีวิต - รายงานใหม่ใน 24 ชั่วโมงที่แล้ว */}
                            {/* Deaths - newly reported in last 24 hours */}
                            <p>Deaths - cumulative total</p>
                        </div>
                    </div>)
                }
                <div className="col-12 text-center">
                    <div className="counter-update-box">
                        <h6 className="small-title">** last update {lastUpdate}</h6>
                        <p className="covid-update-status">{text}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

Counter.propTypes = {
    className: PropTypes.string,
}
Counter.defaultProps = {
    className: '',
}

export default Counter

