import React from 'react'

export default function FormOrderBilling() {
    return (
        <form >
            <h2>Billing information</h2>
            <div className="input-goupe-zone">
                <label htmlFor="name"> First Name</label>
                <input
                    className="input-text-name-zone"
                    id="name"
                    name="name"
                    type="text"
                    required
                //   value={zone.name ? zone.name : ''}
                //     onChange={(e) => handleChange(e, zone.zoneId)}
                />
            </div>
            <div className="input-goupe-zone">
                <label htmlFor="name">Last Name</label>
                <input
                    className="input-text-name-zone"
                    id="last_name"
                    name="last_name"
                    type="text"
                    required
                //   value={zone.name ? zone.name : ''}
                //     onChange={(e) => handleChange(e, zone.zoneId)}
                />
            </div>
            <div className="input-goupe-zone">
                <label htmlFor="name">Your adress</label>
                <input
                    className="input-text-name-zone"
                    id="adress"
                    name="adress"
                    type="text"
                    required
                //   value={zone.name ? zone.name : ''}
                //     onChange={(e) => handleChange(e, zone.zoneId)}
                />
            </div>
            <div className="input-goupe-zone">
                <label htmlFor="name">Your Phone number</label>
                <input
                    className="input-text-name-zone"
                    id="phone"
                    name="phone"
                    type="tel"
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                //   value={zone.name ? zone.name : ''}
                //     onChange={(e) => handleChange(e, zone.zoneId)}
                />
            </div>
            <button type="submit">submit</button>
        </form>
    )
}
