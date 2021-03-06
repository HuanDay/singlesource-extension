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

import { AnyAction } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { EMPTY } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import types from '../../../shared/actions';
import { BgMsgTypes, MessageOrigin } from '../../../types';
import { EpicDependencies } from '../../store';
import { State } from '../../types/state';

const onAccountsChangeEpic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<State>,
  {runtimeStream}: EpicDependencies
) =>
  action$.pipe(
    ofType(types.GET_ACCOUNTS.SUCCESS, types.DISCONNECT),
    withLatestFrom(state$),
    switchMap(([, state]) => {
      const { accounts } = state;
      runtimeStream.send(BgMsgTypes.ACCOUNTS, accounts, [MessageOrigin.PAGE, MessageOrigin.BG]);
      return EMPTY;
    })
  );

export default onAccountsChangeEpic;
