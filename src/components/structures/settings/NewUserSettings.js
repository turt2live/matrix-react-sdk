/*
Copyright 2017 Travis Ralston

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as React from "react";
import {_td} from "../../../languageHandler";
import {TabbedView, Tab} from "../TabbedView";
import GeneralUserSettingsPanel from "./user/GeneralUserSettingsPanel";

module.exports = React.createClass({
    displayName: 'NewUserSettings',

    propTypes: {
        onClose: React.PropTypes.func,
        // The brand string given when creating email pushers
        brand: React.PropTypes.string,

        // The base URL to use in the referral link. Defaults to window.location.origin.
        referralBaseUrl: React.PropTypes.string,

        // Team token for the referral link. If falsy, the referral section will
        // not appear
        teamToken: React.PropTypes.string,
    },

    getDefaultProps: function () {
        return {
            onClose: function () {
            },
        };
    },

    _getTabs: function () {
        return [
            new Tab(_td("General"), (<GeneralUserSettingsPanel />)),
            new Tab(_td("Test Tab 2"), (<div><h3>This is another tab</h3><p>Woo!</p></div>)),
        ];
    },

    render: function () {
        return <TabbedView onExit={this.props.onClose} tabs={this._getTabs()} />
    },
});