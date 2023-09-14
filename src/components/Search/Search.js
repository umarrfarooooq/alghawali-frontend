import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Search = ({ onSearch }) => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="flex items-center justify-between container shadow-md rounded-lg py-2 mt-12">
                <div className="w-full">
                    <FontAwesomeIcon icon={faSearch} className="w-4 h-4 text-gray-500" />
                    <input
                        style={{ width: "80%" }}
                        className="py-2 pl-4 outline-none searchInput"
                        type="text"
                        placeholder={t('allProfiles.searchBtn')}

                        onChange={(e) => onSearch(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;
