/**
 * Copyright 2019 Centrality Investments Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {combineReducers} from 'redux';
import sharedReducers from '../../shared/reducers';
import balances from './balancesReducer';
import enable from './enableReducer';
import peerjs from './peerjsReducer';
import route from './routeReducer';
import selectedAccount from './selectedAccountReducer';
import sign from './signReducer';
import transactions from './transactions';

const reducers = combineReducers({
  ...sharedReducers,
  route,
  sign,
  selectedAccount,
  balances,
  transactions,
  peerjs,
  enable
});

export default reducers;
