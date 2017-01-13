import _ from 'lodash';
import React from 'react'; // eslint-disable-line no-unused-vars
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'; // eslint-disable-line no-unused-vars

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
};
