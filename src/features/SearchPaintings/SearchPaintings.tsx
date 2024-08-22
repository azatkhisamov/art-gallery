import { memo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from '../../components/Input/Input';

const SearchPaintings = memo(function SearchPaintings() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [search, setSearch] = useState<string>(query);
  return <Input search={search} setSearch={setSearch} />;
});

export default SearchPaintings;
