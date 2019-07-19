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

import { v4 } from 'uuid';
import { inpageBgDuplexStream } from './messenger';
import {
  InPageMsgTypes,
  SignCommand,
  SignPayload, MessageOrigin
} from '../types';

const signOnSingleSource = (payload: SignPayload): Promise<string> => {
  const uuid = v4();
  const message: SignCommand = {
    payload,
    type: InPageMsgTypes.SIGN,
    requestUUID: uuid,
  };
  return inpageBgDuplexStream.sendRequest(message, MessageOrigin.BG);
};

export default signOnSingleSource;
