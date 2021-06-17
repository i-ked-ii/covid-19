import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic';

const SelectNoSSR = dynamic(() => import("react-select"), { ssr: false });

const SectionCountries = props => {
    const {isSearchable, onSearchable, countries} = props;
    return (
        <section className="select-area">
          <div className="container">
            <div className="d-inline-block text-center">
              <h2 className="mb-4 d-inline-block">เลือกประเทศเพื่อดูสถานการณ์ COVID-19</h2>
              <SelectNoSSR
                className="d-inline-block"
                styles={{width: 200}}
                instanceId="instance-id"
                value={isSearchable}
                onChange={onSearchable}
                options={countries}
              />
            </div>
          </div>
        </section>
    )
}

SectionCountries.propTypes = {
    isSearchable: PropTypes.object,
    onSearchable: PropTypes.func,
    countries: PropTypes.array
}

export default SectionCountries
