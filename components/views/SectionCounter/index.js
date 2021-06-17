import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {Counter} from '@/components/views'

const SectionCounter = (props) => {
    const {isSearchable, data, lastChecked, covid19Stats} = props;
    return (
        <section className="counter-area">
            <div className="container">
              {isSearchable !== null && (<div className="about-info">
                <h2>สถานการณ์ในประเทศ: {isSearchable.label}</h2>
              </div>)
              }
            {
              data.map((item) => (
                <Fragment key={item.country}>
                  <Counter
                    key={item.country}
                    country={item.country}
                    cases={item.confirmed}
                    recovered={item.recovered}
                    deaths={item.deaths}
                    lastUpdate={moment(lastChecked).format('Do MMMM YYYY, h:mm:ss a')}
                    text="***ค่าของ api COVID-19 Coronavirus Statistics มีค่าใกล้เคียงกับค่าจาก WHO"
                  />
                  {/* ผู้ป่วยยืนยัน (คน)
                  สะสม {item.confirmed}
                  รายใหม่
                  3,129
                  ดีขึ้น
                  {item.recovered}
                  เสียชีวิต
                  {item.deaths} */}
                </Fragment>
              ))
            }
            <div className="mt-5">
            {
              covid19Stats.map((item) => (
                <Fragment key={item.country}>
                  <Counter
                    cases={item.cases.total}
                    newcases={item.cases.new}
                    recovered={item.cases.recovered}
                    deaths={item.deaths.total}
                    lastUpdate={moment(item.time).format('Do MMMM YYYY, h:mm:ss a')}
                    text="***ค่าของ api COVID-19 มีค่าใกล้เคียงกับค่าจากกรมควบคุมโรค"
                  />
                  {/* สะสม {item.cases.total}207,724
                  รายใหม่
                  3,129{item.cases.new}
                  ดีขึ้น {item.cases.recovered}
                  เสียชีวิต
                  1,555{item.deaths.total} */}
                </Fragment>
              ))
            }
            </div>
          </div>
        </section>
    )
}

SectionCounter.propTypes = {
    isSearchable: PropTypes.object,
    data: PropTypes.array,
    covid19Stats: PropTypes.array,
}

export default SectionCounter

