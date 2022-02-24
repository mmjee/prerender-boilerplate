# A Prerender Boilerplate for SPA projects

Docker included :)

### How to use

```shell
git clone --depth 1 https://github.com/mmjee/prerender-boilerplate.git
git clone --depth 1 https://github.com/me/my-SPA.git
$EDITOR Dockerfile
$EDITOR docker-compose.yml
docker-compose up -d
```

You'll have to change the SPA path in Dockerfile at line 4. Change docker-compose to implement IPv6 (delegate a prefix, set static addresses).

Once done that's all you can reverse proxy into the node container and it'll automatically serve your SPA while being indexable, searchable and embeddable.

### Licensing

Copyright (C) 2021 Maharshi Mukherjee

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
