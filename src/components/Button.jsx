import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
export default function Button({ handleFunc, children, loading, ...props }) {
    return (
        <button disabled={ loading } onClick={ handleFunc } className="btn btn-sm btn-dark d-flex align-items-center" { ...props }>
            {
                loading && <LoadingOutlined
                    style={ {
                        fontSize: 20, marginRight: 10
                    } }
                    spin
                />
            }
            { children }
        </button>
    )
}
