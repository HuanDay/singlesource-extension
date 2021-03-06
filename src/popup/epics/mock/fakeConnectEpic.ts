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
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import types from '../../../shared/actions';

const fakeConnectEpic = (
  action$: ActionsObservable<AnyAction>
): Observable<AnyAction> =>
  action$.pipe(
    ofType('fake_connect'),
    switchMap(() =>
      of({
        type: types.CONNECT,
        payload: [
          {
            name: 'Account 1',
            address: '5DfqFJ5x8jvnp6zECL42wajXnyXPu1pT5bsvrbd5yW3k7Jz4',
            assets: [{ assetId: 16000 }, { assetId: 16001 }]
          },
          {
            name: 'Account 2',
            address: '5C9ymK4hSeWvgjuSAvaK2nH7EvShYpMNsTyfYuuqxRaqghzF',
            assets: [{ assetId: 16000 }, { assetId: 16001 }]
          },
          {
            name: 'Account 3',
            address: '5FiDbkpuQQ1igJghTjfCWxT4LHybfXay4jtBAnkECzCqWNep',
            assets: [{ assetId: 16000 }, { assetId: 16001 }]
          }
        ]
      })
    )
  );

export default fakeConnectEpic;
