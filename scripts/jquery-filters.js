/********************************************************************
 * http://www.web-experts.gr (Custom javascript)
 *
 * Copyright (c) 2010
 * Powered by Web-Experts
 ********************************************************************/

function toggleShowAllFiltersButton() {
    var max_preview_filters;
    if ($('input[type="hidden"][name="max_allow_filters_categories_preview"]').length) {
        max_preview_filters = parseInt($('input[type="hidden"][name="max_allow_filters_categories_preview"]').val());
    }
    if ($('.modal-content .extended_filters_category:not(.inactive)').length > max_preview_filters) {
        $('.show-all-filters').show();
    }
    else {
        $('.show-all-filters').hide();
    }
}

function toggleFiltersCategories() {
    var max_preview_filters = 0;
    if ($('input[type="hidden"][name="max_allow_filters_categories_preview"]').length) {
        max_preview_filters = parseInt($('input[type="hidden"][name="max_allow_filters_categories_preview"]').val());
    }

    if (max_preview_filters > 0) {
        $('.filters-wrap .extended_filter_field_container').each(function () {
            if ($(this).find('.ffield:not(.inactive)').length === 0) {
                $(this).closest('.extended_filters_category').addClass('inactive');
            }
            else {
                if (max_preview_filters-- > 0) {
                    $(this).closest('.extended_filters_category').removeClass('inactive');
                }
                else {
                    $(this).closest('.extended_filters_category').addClass('inactive');
                }
            }
        });
    }

    $('.modal-content .extended_filter_field_container').each(function () {
        if ($(this).find('.ffield:not(.inactive)').length === 0) {
            $(this).closest('.extended_filters_category').addClass('inactive');
        }
        else {
            $(this).closest('.extended_filters_category').removeClass('inactive');
        }
    });
}

function searchForArray(haystack, needle) {
    var i, j, current;
    for (i = 0; i < haystack.length; ++i) {
        if (needle.length === haystack[i].length) {
            current = haystack[i];
            for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
            if (j === needle.length)
                return i;
        }
    }
    return -1;
}

function loadQueryString() {
    var parameters = {};
    var searchString = location.search.substr(1);
    var pairs = searchString.split("&");
    var parts;
    for (i = 0; i < pairs.length; i++) {
        parts = pairs[i].split("=");
        var name = parts[0];
        var data = decodeURI(parts[1]);
        if (parameters[name] !== undefined) {
            parameters[name] = data;
        }
    }
    return parameters;
}
function handleUrlSortProducts() {
    var read_url = window.location.href;
    var url = new URL(read_url);
    var search_params = url.searchParams;

    if ($('#sort').val() !== undefined) {
        search_params.set('sort', $('#sort').val());
    }
    else {
        search_params.delete('sort');
    }

    url.search = search_params.toString();
    var new_url = url.toString();
    new_url = new_url.replace(/%2C/g, ",");
    window.history.replaceState({ path: new_url }, '', new_url);
}
function handleUrlPagination() {
    var read_url = window.location.href;
    var url = new URL(read_url);
    var search_params = url.searchParams;

    if ($('#chooseProductListingPage').val() !== '1' && $('#chooseProductListingPage').val() !== undefined) {
        search_params.set('p', $('#chooseProductListingPage').val());
    }
    else {
        if ($('#chooseProductListingItemsPerPage').val() !== 'view-all') {
            search_params.delete('p');
        }
    }

    if ($('#chooseProductListingItemsPerPage').val() !== undefined) {
        if ($('#chooseProductListingItemsPerPage').val() === 'view-all') {
            search_params.delete('ipp');
            search_params.set('p', $('#chooseProductListingItemsPerPage').val());
        }
        else {
            search_params.set('ipp', $('#chooseProductListingItemsPerPage').val());
        }
    }
    else {
        search_params.delete('ipp');
    }

    url.search = search_params.toString();
    var new_url = url.toString();
    new_url = new_url.replace(/%2C/g, ",");
    window.history.replaceState({ path: new_url }, '', new_url);
}
function clearUrlParameters() {
    var read_url = window.location.href;
    var url = new URL(read_url);
    var search_params = url.searchParams;
    if ($('.extended_filters_category_product_categories').length) {
        search_params.delete($('.extended_filters_category_product_categories').attr('data-category-tag'));
    }
    if ($('.extended_filters_category_manufacturers').length) {
        search_params.delete($('.extended_filters_category_manufacturers').attr('data-category-tag'));
    }
    if ($('.extended_filters_category_availability').length) {
        search_params.delete($('.extended_filters_category_availability').attr('data-category-tag'));
    }
    if ($('.extended_filters_category_attribute').length) {
        $('.extended_filters_category_attribute').each(function () {
            search_params.delete($(this).attr('data-category-tag'));
        });
    }
    if ($('.extended_filters_category_attribute_group').length) {
        $('.extended_filters_category_attribute_group').each(function () {
            search_params.delete($(this).attr('data-category-tag'));
        });
    }
    if ($('.extended_filters_category_custom').length) {
        $('.extended_filters_category_custom').each(function () {
            search_params.delete($(this).attr('data-category-tag'));
        });
    }
    if ($('#chooseProductListingItemsPerPage').val() !== 'view-all') {
        search_params.delete('p');
    }
    url.search = search_params.toString();
    var new_url = url.toString();
    new_url = new_url.replace(/%2C/g, ",");
    window.history.replaceState({ path: new_url }, '', new_url);
}
function handleUrlFiltersOnClick(el, filter_type, filter_category) {
    var read_url = window.location.href;
    var url = new URL(read_url);
    var search_params = url.searchParams;
    if (el !== undefined) {
        if (el.hasClass('filter_action')) {
            var url_variable = '';
            if (filter_type === 'manufacturer' && $('.extended_filters_category_manufacturers').length) {
                url_variable = $('.extended_filters_category_manufacturers').attr('data-category-tag');
                //                url_variable = 'mFilter';
            }
            else if (filter_type === 'availability' && $('.extended_filters_category_availability').length) {
                url_variable = $('.extended_filters_category_availability').attr('data-category-tag');
                //                url_variable = 'mFilter';
            }
            else if (filter_type === 'product_category' && $('.extended_filters_category_product_categories').length) {
                url_variable = $('.extended_filters_category_product_categories').attr('data-category-tag');
                //                url_variable = 'pFilter';
            }
            else if (filter_type === 'attribute' && $('.extended_filters_category_attribute_' + filter_category).length) {
                url_variable = $('.extended_filters_category_attribute_' + filter_category).attr('data-category-tag');
                //                url_variable = 'aFilter';
            }
            else if (filter_type === 'extended' && $('.extended_filters_category_' + filter_category).length) {
                url_variable = $('.extended_filters_category_' + filter_category).attr('data-category-tag');
                //                url_variable = 'eFilter';
            }
            else if (filter_type === 'attribute_group' && $('.extended_filters_category_attribute_group_' + filter_category).length) {
                url_variable = $('.extended_filters_category_attribute_group_' + filter_category).attr('data-category-tag');
            }
            if (url_variable !== '' && url_variable !== null && url_variable !== undefined) {
                var filterValue = el.attr('data-tag');
                if (el.is(':checked')) {
                    if (search_params.get(url_variable) !== undefined && search_params.get(url_variable) !== null) {
                        var str = search_params.get(url_variable);
                        var varValues = str.split(',');
                        if (!varValues.includes(filterValue)) {
                            varValues.push(filterValue);
                        }
                        var strVarValues = varValues.join();
                        search_params.set(url_variable, strVarValues);
                    }
                    else {
                        search_params.set(url_variable, filterValue);
                    }
                }
                else {
                    if (search_params.get(url_variable) !== undefined && search_params.get(url_variable) !== null) {

                        var str = search_params.get(url_variable);
                        var varValues = str.split(',');
                        if (varValues.includes(filterValue)) {
                            varValues = $.grep(varValues, function (value) {
                                return value != filterValue;
                            });
                        }
                        if (varValues.length === 0) {
                            search_params.delete(url_variable);
                        }
                        else {
                            var strVarValues = varValues.join();
                            search_params.set(url_variable, strVarValues);
                        }
                    }
                }
            }
        }
        handleUrlPriceRange();
        url.search = search_params.toString();
        var new_url = url.toString();
        new_url = new_url.replace(/%2C/g, ",");
        window.history.replaceState({ path: new_url }, '', new_url);
    }
}

function handleUrlFilters(selected_filters) {
    var read_url = window.location.href;
    var url = new URL(read_url);
    var search_params = url.searchParams;
    var selected_products_categories_filters_json = selected_filters['product_category'];
    var selected_products_categories_filters_length = Object.keys(selected_products_categories_filters_json).length;
    var selected_products_categories_filters = Object.values(selected_products_categories_filters_json);

    var selected_manufacturers_filters_json = selected_filters['manufacturer'];
    var selected_manufacturers_filters_length = Object.keys(selected_manufacturers_filters_json).length;
    var selected_manufacturers_filters = Object.values(selected_manufacturers_filters_json);

    var selected_availability_filters_json = selected_filters['availability'];
    var selected_availability_filters_length = Object.keys(selected_availability_filters_json).length;
    var selected_availability_filters = Object.values(selected_availability_filters_json);

    var selected_attributes_filters_json = selected_filters['attribute'];
    var selected_attributes_filters_length = Object.keys(selected_attributes_filters_json).length;
    var selected_attributes_filters = Object.values(selected_attributes_filters_json);

    var selected_extended_filters_json = selected_filters['extended'];
    var selected_extended_filters_length = Object.keys(selected_extended_filters_json).length;
    var selected_extended_filters = Object.values(selected_extended_filters_json);
    var strVarValuesProductsCategoriesFilters;
    var strVarValuesManufacturersFilters;
    var strVarValuesAvailabilityFilters;
    var strVarValuesAttributesFilters;
    var strVarValuesExtendedFilters;

    if (selected_products_categories_filters_length > 0) {
        strVarValuesProductsCategoriesFilters = selected_products_categories_filters.join();
    }
    if (selected_manufacturers_filters_length > 0) {
        strVarValuesManufacturersFilters = selected_manufacturers_filters.join();
    }
    if (selected_availability_filters_length > 0) {
        strVarValuesAvailabilityFilters = selected_availability_filters.join();
    }
    if (selected_attributes_filters_length > 0) {
        strVarValuesAttributesFilters = selected_attributes_filters.join();
    }
    if (selected_extended_filters_length > 0) {
        strVarValuesExtendedFilters = selected_extended_filters.join();
    }

    if (strVarValuesProductsCategoriesFilters !== undefined) {
        search_params.set('pFilter', strVarValuesProductsCategoriesFilters);
    }
    else {
        search_params.delete('pFilter');
    }
    if (strVarValuesManufacturersFilters !== undefined) {
        search_params.set('mFilter', strVarValuesManufacturersFilters);
    }
    else {
        search_params.delete('mFilter');
    }
    if (strVarValuesAvailabilityFilters !== undefined) {
        search_params.set('avFilter', strVarValuesAvailabilityFilters);
    }
    else {
        search_params.delete('avFilter');
    }
    if (strVarValuesAttributesFilters !== undefined) {
        search_params.set('aFilter', strVarValuesAttributesFilters);
    }
    else {
        search_params.delete('aFilter');
    }
    if (strVarValuesExtendedFilters !== undefined) {
        search_params.set('eFilter', strVarValuesExtendedFilters);
    }
    else {
        search_params.delete('eFilter');
    }

    url.search = search_params.toString();
    var new_url = url.toString();
    new_url = new_url.replace(/%2C/g, ",");
    window.history.replaceState({ path: new_url }, '', new_url);
}
function handleUrlPriceRange() {
    var read_url = window.location.href;
    var url = new URL(read_url);
    var search_params = url.searchParams;
    var price_from = $('.price_from').val();
    var price_to = $('.price_to').val();
    var price_min = $('.price_min').val();
    var price_max = $('.price_max').val();
    var url_variable_1 = 'priceMin';
    var url_variable_2 = 'priceMax';
    if (price_from === price_min && price_to === price_max) {
        search_params.delete(url_variable_1);
        search_params.delete(url_variable_2);
    }
    else {
        search_params.set(url_variable_1, price_from);
        search_params.set(url_variable_2, price_to);
    }
    url.search = search_params.toString();
    var new_url = url.toString();
    new_url = new_url.replace(/%2C/g, ",");
    window.history.replaceState({ path: new_url }, '', new_url);
}
function filter_manager_on_page_load() {
    //    $('.filter_action:checked').first().prop('checked', true).trigger('change');
    toggleShowAllFiltersButton();
    var url_filters = JSON.parse($('#url_filters_on_load').html());
    if (url_filters['attribute'].length > 0) {
        var array_data = url_filters['attribute'];
        var arrayLength = array_data.length;
        for (var i = 0; i < arrayLength; i++) {
            var container_class = createClassReferenceFromAttributeClass($('.filter_action_attribute_' + array_data[i]).closest('.extended_filters_category').attr('class'));
            $('.filters-wrap ' + container_class).find('.filter_action').removeClass('inactive');
            $('.modal-body ' + container_class).find('.filter_action').removeClass('inactive');
        }

    }
    if (url_filters['attribute_group'].length > 0) {
        var array_data = url_filters['attribute_group'];
        var arrayLength = array_data.length;
        for (var i = 0; i < arrayLength; i++) {
            var container_class = createClassReferenceFromAttributeClass($('.filter_action_attribute_group_' + array_data[i]).closest('.extended_filters_category').attr('class'));
            $('.filters-wrap ' + container_class).find('.filter_action').removeClass('inactive');
            $('.modal-body ' + container_class).find('.filter_action').removeClass('inactive');
        }
    }
    if (url_filters['extended'].length > 0) {
        var array_data = url_filters['extended'];
        var arrayLength = array_data.length;
        for (var i = 0; i < arrayLength; i++) {
            var container_id = $('.extended_filter_' + array_data[i]).closest('.extended_filters_category').attr('data-filters-category');

            $('.filters-wrap .extended_filters_category_custom_' + container_id).find('.ffield').each(function () {
                $(this).removeClass('inactive');
            });
            $('.modal-body .extended_filters_category_custom_' + container_id).find('.ffield').each(function () {
                $(this).removeClass('inactive');
            });
        }
    }
    if (url_filters['manufacturer'].length > 0) {
        var array_data = url_filters['manufacturer'];
        var arrayLength = array_data.length;
        for (var i = 0; i < arrayLength; i++) {
            var container_class = createClassReferenceFromAttributeClass($('.filter_manufacturer_' + array_data[i]).closest('.extended_filters_category').attr('class'));
            $('.filters-wrap ' + container_class).find('.filter_action').removeClass('inactive');
            $('.modal-body ' + container_class).find('.filter_action').removeClass('inactive');
        }
    }
    if (url_filters['availability'].length > 0) {
        var array_data = url_filters['availability'];
        var arrayLength = array_data.length;
        for (var i = 0; i < arrayLength; i++) {
            var container_class = createClassReferenceFromAttributeClass($('.filter_availability_' + array_data[i]).closest('.extended_filters_category').attr('class'));
            $('.filters-wrap ' + container_class).find('.filter_action').removeClass('inactive');
            $('.modal-body ' + container_class).find('.filter_action').removeClass('inactive');
        }
    }
    if (url_filters['product_category'].length > 0) {
        var array_data = url_filters['product_category'];
        var arrayLength = array_data.length;
        for (var i = 0; i < arrayLength; i++) {
            var container_class = createClassReferenceFromAttributeClass($('.filter_product_category_' + array_data[i]).closest('.extended_filters_category').attr('class'));
            $('.filters-wrap ' + container_class).find('.filter_action').removeClass('inactive');
            $('.modal-body ' + container_class).find('.filter_action').removeClass('inactive');
        }
    }
    //$('.filter_action:checked').first().prop('checked', true).trigger('change');
}
function filter_manager(selected_filters, active_filters, cbox, filter_type, filter_category) {
    var total_filters_checked = $('.filter_action:checked').length;
    var price_filters_checked = 0;
    if ($('.price_from').val() !== undefined && $('.price_min').val() !== undefined && parseFloat($('.price_from').val()) !== parseFloat($('.price_min').val())) {
        price_filters_checked++;
    }
    if ($('.price_to').val() !== undefined && $('.price_max').val() !== undefined && parseFloat($('.price_to').val()) !== parseFloat($('.price_max').val())) {
        price_filters_checked++;
    }
    var pass = false;
    var pass_type = filter_type;
    var pass_category = filter_category;
    var attributes_categories_checked = [];
    var attributes_groups_categories_checked = [];
    var extended_categories_checked = [];
    var filters_types_checked = 0;
    var products_categories_checked = false;
    var manufacturers_checked = false;
    var availability_checked = false;
    var attributes_checked = false;
    var extended_checked = false;
    var attribute_group_checked = false;
    var total_hidden_filters = $('#hidden_filters_extended').length + $('#hidden_filters_manufacturer').length;

    if (total_filters_checked === 0 && price_filters_checked === 0 && total_hidden_filters === 0) {
        clear_filter_manager();
    }
    else {
        var chbox_checked = cbox.is(':checked');
        if (selected_filters !== undefined) {
            var selected_products_categories_filters = selected_filters['product_category'];
            var selected_products_categories_filters_length = Object.keys(selected_products_categories_filters).length;
            var selected_products_categories_filters_data = Object.values(selected_products_categories_filters);

            if (selected_products_categories_filters_length > 0) {
                filters_types_checked = filters_types_checked + 1;
                products_categories_checked = true;
            }

            var selected_manufacturers_filters = selected_filters['manufacturer'];
            var selected_manufacturers_filters_length = Object.keys(selected_manufacturers_filters).length;
            var selected_manufacturers_filters_data = Object.values(selected_manufacturers_filters);

            if (selected_manufacturers_filters_length > 0) {
                filters_types_checked = filters_types_checked + 1;
                manufacturers_checked = true;
            }
            var selected_availability_filters = selected_filters['availability'];
            var selected_availability_filters_length = Object.keys(selected_availability_filters).length;
            var selected_availability_filters_data = Object.values(selected_availability_filters);

            if (selected_availability_filters_length > 0) {
                filters_types_checked = filters_types_checked + 1;
                availability_checked = true;
            }
            var selected_attributes_filters = selected_filters['attribute'];
            var selected_attributes_filters_length = Object.keys(selected_attributes_filters).length;
            var attributes_categories_checked = Object.keys(selected_attributes_filters);
            var attributes_categories_checked_length = attributes_categories_checked.length;
            if (selected_attributes_filters_length > 0) {
                filters_types_checked = filters_types_checked + 1;
                attributes_checked = true;
            }

            var selected_extended_filters = selected_filters['extended'];
            var selected_extended_filters_length = Object.keys(selected_extended_filters).length;
            var selected_extended_filters_data = Object.values(selected_extended_filters);

            if (selected_extended_filters_length > 0) {
                filters_types_checked = filters_types_checked + 1;
                extended_checked = true;
            }

            //ekkrem
            var selected_attributes_groups_filters = selected_filters['attribute_group'];
            var selected_attributes_groups_filters_length = Object.keys(selected_attributes_groups_filters).length;
            var attributes_groups_categories_checked = Object.keys(selected_attributes_groups_filters);
            var attributes_groups_categories_checked_length = attributes_groups_categories_checked.length;
            if (selected_attributes_groups_filters_length > 0) {
                filters_types_checked = filters_types_checked + 1;
                attribute_group_checked = true;
            }
        }
        if (active_filters !== undefined) {
            var products_categories_filters = active_filters['product_category'];
            var products_categories_filters_length = Object.keys(products_categories_filters).length;

            var manufacturers_filters = active_filters['manufacturer'];
            var manufacturers_filters_length = Object.keys(manufacturers_filters).length;

            var availability_filters = active_filters['availability'];
            var availability_filters_length = Object.keys(availability_filters).length;

            var attributes_filters = active_filters['attribute'];
            var attributes_filters_length = Object.keys(attributes_filters).length;

            var extended_filters = active_filters['extended'];
            var extended_filters_length = Object.keys(extended_filters).length;

            var attributes_groups_filters = active_filters['attribute_group'];
            var attributes_groups_filters_length = Object.keys(attributes_groups_filters).length;
            if (total_filters_checked === 1 || filters_types_checked === 1) {

                var checked_filter_type = $('.filter_action:checked').attr('data-filter-type');
                if (checked_filter_type === 'product_category' || products_categories_checked) {
                    pass_category = 'product_category';
                    $('.product_category_filter_action').each(function () {
                        $(this).parent().removeClass('inactive');
                        $(this).closest('.filter-root-container').removeClass('inactive');
                        $(this).closest('.filter-root-container').find('.filter-subtitle').removeClass('inactive');
                    });
                }
                if (checked_filter_type === 'manufacturer' || manufacturers_checked) {
                    pass_category = 'manufacturer';
                    $('.manufacturer_filter_action').each(function () {
                        $(this).parent().removeClass('inactive');
                    });
                }
                if (checked_filter_type === 'availability' || availability_checked) {
                    pass_category = 'availability';
                    $('.availability_filter_action').each(function () {
                        $(this).parent().removeClass('inactive');
                    });
                }
                if (checked_filter_type === 'attribute' || attributes_checked) {
                    filter_category = $('.attribute_filter_action:checked').attr('data-filter-category');
                    pass_category = filter_category;
                    if (attributes_categories_checked_length === 1) {
                        pass_category = attributes_categories_checked[0];
                        $('.attribute_filter_action').each(function () {
                            if ($(this).attr('data-filter-category') === pass_category) {
                                $(this).parent().removeClass('inactive');
                            }
                        });
                    }
                    else {
                        $('.attribute_filter_action').each(function () {
                            if ($(this).attr('data-filter-category') !== pass_category) {
                                $(this).parent().removeClass('inactive');
                            }
                        });
                    }
                }

                if (checked_filter_type === 'extended' || extended_checked) {
                    /*filter_category = $('.extended_filter_action:checked').attr('data-filter-category');*/
                    filter_category = cbox.attr('data-filter-category');
                    pass_category = filter_category;
                    /*$('.extended_filter_action').each(function(){
                        $(this).parent().removeClass('inactive');
                    });*/
                }
                if (checked_filter_type === 'attribute_group' || attribute_group_checked) {
                    /*filter_category = $('.filter_action:checked').attr('data-filter-category');*/
                    filter_category = cbox.attr('data-filter-category');
                    pass_category = filter_category;
                    /*if(attributes_groups_categories_checked_length === 1)
                    {
                        pass_category = attributes_groups_categories_checked[0];
                        $('.attribute_group_filter_action').each(function(){
                            if($(this).attr('data-filter-category') === pass_category){
                                $(this).parent().removeClass('inactive');
                            }
                        });
                    }
                    else
                    {
                        $('.attribute_group_filter_action').each(function(){
                            if($(this).attr('data-filter-category') !== pass_category){
                                $(this).parent().removeClass('inactive');
                            }
                        });
                    }*/
                }

            }
            if (filter_type !== 'product_category' && pass_category !== 'product_category') {
                $('.product_category_filter_action').each(function () {
                    if (!$(this).is(':checked')) {
                        $(this).parent().addClass('inactive');
                    }
                });
                for (var i = products_categories_filters_length - 1; i >= 0; i--) {
                    $('.filter_product_category_' + products_categories_filters[i]).parent().removeClass('inactive');
                }
                $('.filter-subtitle').each(function () {
                    var this_id = $(this).attr('data-id');
                    var subcategories = $('.ffield[data-parent="' + this_id + '"]:not(.inactive)');
                    var subcategories_number = subcategories.length;
                    if (subcategories_number > 0) {
                        $(this).removeClass('inactive');
                    }
                    else {
                        $(this).addClass('inactive');
                    }
                });
                $('.filter-root-container').each(function () {
                    var this_id = $(this).attr('data-root');
                    var subcategories = $(this).find('.filter-subtitle:not(.inactive)');
                    var subcategories_number = subcategories.length;
                    var fields = $(this).find('.ffield:not(.inactive)');
                    var fields_number = subcategories.length;
                    if (subcategories_number > 0 || fields_number > 0) {
                        $(this).removeClass('inactive');
                        $('.filter-title[data-root-id="' + this_id + '"]').removeClass('inactive');
                    }
                    else {
                        $(this).addClass('inactive');
                        $('.filter-title[data-root-id="' + this_id + '"]').addClass('inactive');
                    }
                });
            }
            if (filter_type !== 'manufacturer' && pass_category !== 'manufacturer') {
                $('.manufacturer_filter_action').each(function () {
                    if (!$(this).is(':checked')) {
                        $(this).parent().addClass('inactive');
                    }
                });
                for (var i = manufacturers_filters_length - 1; i >= 0; i--) {
                    $('.filter_manufacturer_' + manufacturers_filters[i]).parent().removeClass('inactive');
                }
            }
            if (filter_type !== 'availability' && pass_category !== 'availability') {
                $('.availability_filter_action').each(function () {
                    if (!$(this).is(':checked')) {
                        $(this).parent().addClass('inactive');
                    }
                });
                for (var i = availability_filters_length - 1; i >= 0; i--) {
                    $('.filter_availability_' + availability_filters[i]).parent().removeClass('inactive');
                }
            }
            $('.extended_filters_category_attribute' + (filter_type === 'attribute' ? ':not(.custom_filter_attribute_category_' + pass_category + ')' : '')).each(function () {
                $(this).find('.attribute_filter_action').each(function () {
                    if (!$(this).is(':checked')) {
                        $(this).parent().addClass('inactive');
                    }
                });
            });
            for (var i = attributes_filters_length - 1; i >= 0; i--) {
                $('.filter_attribute_' + attributes_filters[i]).parent().removeClass('inactive');
            }

            $('.extended_filters_category_custom' + (filter_type === 'extended' ? ':not(.extended_filters_category_custom_' + pass_category + ')' : '')).each(function () {
                $(this).find('.extended_filter_action').each(function () {
                    if (!$(this).is(':checked')) {
                        $(this).parent().addClass('inactive');
                    }
                });
            });
            for (var i = extended_filters_length - 1; i >= 0; i--) {
                $('.extended_filter_' + extended_filters[i]).parent().removeClass('inactive');
            }

            $('.extended_filters_category_attribute_group' + (filter_type === 'attribute_group' ? ':not(.custom_filter_attribute_group_category_' + pass_category + ')' : '')).each(function () {
                $(this).find('.attribute_group_filter_action').each(function () {
                    if (!$(this).is(':checked')) {
                        $(this).parent().addClass('inactive');
                    }
                });
            });
            for (var i = attributes_groups_filters_length - 1; i >= 0; i--) {
                $('.filter_attribute_group_' + attributes_groups_filters[i]).parent().removeClass('inactive');
            }
        }
    }

    toggleFiltersCategories();
    toggleShowAllFiltersButton();
    //    handleUrlFilters(selected_filters);
}

function clear_filter_manager() {
    var max_preview_filters = parseInt($('input[type="hidden"][name="max_allow_filters_categories_preview"]').val());
    if ($('.modal-body .product_category_filter_action').length) {
        $('.modal-body .product_category_filter_action').each(function () {
            $(this).prop('checked', false);
            var parent = $(this).parent();
            if (parent.hasClass('inactive')) {
                parent.removeClass('inactive');
                var parent_class = createClassReferenceFromAttributeClass(parent.attr('class'));
                if ($('.filters-wrap').find(parent_class).length) {
                    if (max_preview_filters-- > 0) {
                        $('.filters-wrap').find(parent_class).removeClass('inactive');
                    }
                }
            }
        });
    }

    if ($('.modal-body .attribute_filter_action').length) {
        $('.modal-body .attribute_filter_action').each(function () {
            $(this).prop('checked', false);
            var parent = $(this).parent();
            if (parent.hasClass('inactive')) {
                parent.removeClass('inactive');
                var parent_class = createClassReferenceFromAttributeClass(parent.attr('class'));

                if (max_preview_filters-- > 0) {
                    $('.filters-wrap').find(parent_class).removeClass('inactive');
                }
            }
        });
    }

    if ($('.modal-body .attribute_group_filter_action').length) {
        $('.modal-body .attribute_group_filter_action').each(function () {
            $(this).prop('checked', false);
            var parent = $(this).parent();
            if (parent.hasClass('inactive')) {
                parent.removeClass('inactive');
                var parent_class = createClassReferenceFromAttributeClass(parent.attr('class'));

                if (max_preview_filters-- > 0) {
                    $('.filters-wrap').find(parent_class).removeClass('inactive');
                }
            }
        });
    }

    if ($('.modal-body .extended_filter_action').length) {
        $('.modal-body .extended_filter_action').each(function () {
            $(this).prop('checked', false);
            var parent = $(this).parent();
            if (parent.hasClass('inactive')) {
                parent.removeClass('inactive');
                var parent_class = createClassReferenceFromAttributeClass(parent.attr('class'));

                if (max_preview_filters-- > 0) {
                    $('.filters-wrap').find(parent_class).removeClass('inactive');
                }
            }
        });
    }


    if ($('.modal-body .manufacturer_filter_action').length) {
        $('.modal-body .manufacturer_filter_action').each(function () {
            $(this).prop('checked', false);
            var parent = $(this).parent();
            if (parent.hasClass('inactive')) {
                parent.removeClass('inactive');
                var parent_class = createClassReferenceFromAttributeClass(parent.attr('class'));

                if (max_preview_filters-- > 0) {
                    $('.filters-wrap').find(parent_class).removeClass('inactive');
                }
            }
        });
    }

    if ($('.modal-body .availability_filter_action').length) {
        $('.modal-body .availability_filter_action').each(function () {
            $(this).prop('checked', false);
            var parent = $(this).parent();
            if (parent.hasClass('inactive')) {
                parent.removeClass('inactive');
                var parent_class = createClassReferenceFromAttributeClass(parent.attr('class'));

                if (max_preview_filters-- > 0) {
                    $('.filters-wrap').find(parent_class).removeClass('inactive');
                }
            }
        });
    }

    if ($('.modal-body .extended_filters_category').length) {
        $('.modal-body .extended_filters_category').each(function () {
            if ($(this).hasClass('inactive')) {
                $(this).removeClass('inactive');
                var parent_class = createClassReferenceFromAttributeClass($(this).attr('class'));
                if (max_preview_filters-- > 0) {
                    $('.filters-wrap').find(parent_class).removeClass('inactive');
                }
            }

        });
    }
    if ($('.ffield.checked').length) {
        $('.ffield.checked').removeClass('checked');
    }
    if ($('.extended_filters_category_product_categories').length) {
        $('.extended_filters_category_product_categories').attr('data-product_categories', '');
    }
    if ($('.extended_filters_category_manufacturers').length) {
        $('.extended_filters_category_manufacturers').attr('data-manufacturers', '');
    }
    if ($('.extended_filters_category_availability').length) {
        $('.extended_filters_category_availability').attr('data-availability', '');
    }
    if ($('.extended_filters_category_attribute').length) {
        $('.extended_filters_category_attribute').attr('data-filters-attributes', '');
    }
    if ($('.extended_filters_category_custom').length) {
        $('.extended_filters_category_custom').attr('data-filters', '');
    }
    if ($('.extended_filters_category_attribute_group').length) {
        $('.extended_filters_category_attribute_group').attr('data-filters', '');
    }

    $(".range").each(function () {
        var slider = $(this).data("ionRangeSlider");
        slider.update({
            min: minimum,
            max: maximum,
            from: minimum,
            to: maximum
        });
    });
}

function filterActions(el, gotoPage) {
    addLoaderProducts();
    var categories_filters = [];
    var manufacturers_filters = [];
    var availability_filters = [];
    var attributes_filters = {};
    var extended_filters = {};
    var attributes_groups_filters = {};
    var sort = $(".sort_listing").val();
    var total_selected_filters = 0;
    var new_json_selected_filters;
    var obj_selected_filters;
    var products_start_index;
    var page_num;
    var allow_max_page;
    var countItemsPerPage;
    var listing_type;
    var price_from;
    var price_to;
    var price_min;
    var price_max;
    var clear_all_filters = 'false';

    if (el !== undefined) {
        if (el.hasClass('chooseProductListingPage')) {
            if ($('#chooseProductListingPage').length) {
                page_num = $('#chooseProductListingPage').val()
            }
        }
    }
    if ($('input[name="allow_max_page"]').length) {
        allow_max_page = $('input[name="allow_max_page"]').val();
    }
    if (gotoPage !== undefined) {
        if (gotoPage <= allow_max_page && gotoPage > 0) {
            page_num = gotoPage;
        }
    }
    if (page_num === undefined) {
        page_num = 1;
    }
    if ($('#chooseProductListingPage').length) {
        $('#chooseProductListingPage').val(page_num);
    }
    if (el !== undefined && el !== null) {
        if (el.hasClass('clear_all_filters')) {
            clear_all_filters = 'true';
        }
    }
    if (clear_all_filters === 'false') {
        $('.extended_filters_category_custom').each(function () {
            var extended_filters_category_id = $(this).attr('data-filters-category');
            extended_filters[extended_filters_category_id] = [];
        });
        $('.extended_filters_category_attribute').each(function () {
            var attribute_filters_category_id = $(this).attr('data-filters-category');
            attributes_filters[attribute_filters_category_id] = [];
        });
        $('.extended_filters_category_attribute_group').each(function () {
            var attribute_group_filters_category_id = $(this).attr('data-filters-category');
            attributes_groups_filters[attribute_group_filters_category_id] = [];
        });
        var listing_type = $('input[name="product_listing_type"]').val();
        if ($('input[name="filter_product_category[]"]').length > 0) {
            $('input[name="filter_product_category[]"]:checked').each(function () {
                if (categories_filters.indexOf($(this).val()) === -1) {
                    categories_filters.push($(this).val());
                    total_selected_filters++;
                }
            });
        }
        if ($('input[name="filter_manufacturer[]"]').length > 0) {
            $('input[name="filter_manufacturer[]"]:checked').each(function () {
                if (manufacturers_filters.indexOf($(this).val()) === -1) {
                    manufacturers_filters.push($(this).val());
                    total_selected_filters++;
                }
            });
        }
        if ($('input[name="filter_availability[]"]').length > 0) {
            $('input[name="filter_availability[]"]:checked').each(function () {
                if (availability_filters.indexOf($(this).val()) === -1) {
                    availability_filters.push($(this).val());
                    total_selected_filters++;
                }
            });
        }
        if ($('input[name="filter_attribute[]"]').length > 0) {
            $('input[name="filter_attribute[]"]:checked').each(function () {
                var attribute_filter_category = $(this).closest('.extended_filters_category_attribute').attr('data-filters-category');
                if (attributes_filters[attribute_filter_category].indexOf($(this).val()) === -1) {
                    attributes_filters[attribute_filter_category].push($(this).val());
                    total_selected_filters++;
                }
            });
        }
        if ($('input[name="extended_filter[]"]').length > 0) {
            $('input[name="extended_filter[]"]:checked').each(function () {
                var extened_filter_category = $(this).closest('.extended_filters_category').attr('data-filters-category');
                if (extended_filters[extened_filter_category].indexOf($(this).val()) === -1) {
                    extended_filters[extened_filter_category].push($(this).val());
                    total_selected_filters++;
                }
            });
        }

        if ($('input[name="filter_attribute_group[]"]').length > 0) {
            $('input[name="filter_attribute_group[]"]:checked').each(function () {
                var attribute_group_filter_category = $(this).closest('.extended_filters_category_attribute_group').attr('data-filters-category');
                if (attributes_groups_filters[attribute_group_filter_category].indexOf($(this).val()) === -1) {
                    attributes_groups_filters[attribute_group_filter_category].push($(this).val());
                    total_selected_filters++;
                }
            });
        }



        var categories_id;
        var box_title;
        var chbox_filter_type;
        var chbox_filter_category;
        if (el !== undefined && el !== null) {
            if (el.hasClass('filter_action')) {
                categories_id = el.closest('.extended_filters_category').attr('data-filters-category');
                box_title = el.parent().find('input[type="hidden"]').val();
                chbox_filter_type = el.attr("data-filter-type");
                chbox_filter_category = el.closest('.extended_filters_category').attr("data-filters-category");
                if (el.is(':checked')) {
                    var selected_filters_info = JSON.parse($('#selected_filters_json').html());
                    if (chbox_filter_type === 'product_category') {
                        var root_el;
                        var root_title_el;
                        var root_name = '';

                        root_el = el.closest('.filter-root-container');
                        if (root_el !== undefined) {
                            if (root_el.length) {
                                root_title_el = $('.filter-title.action[data-root-id="' + root_el.attr('data-root') + '"]');
                            }
                        }
                        if (root_title_el !== undefined) {
                            if (root_title_el.length) {
                                root_name = root_title_el.text();
                            }
                        }
                        selected_filters_info[chbox_filter_type]['items'][el.val()] = root_name + " " + el.closest('.ffield').find('label').text();
                    }
                    if (chbox_filter_type === 'manufacturer') {
                        selected_filters_info[chbox_filter_type]['items'][el.val()] = el.closest('.ffield').find('label').text();
                    }
                    if (chbox_filter_type === 'availability') {
                        selected_filters_info[chbox_filter_type]['items'][el.val()] = el.closest('.ffield').find('label').text();
                    }
                    else if (chbox_filter_type === 'attribute' || chbox_filter_type === 'extended' || chbox_filter_type === 'attribute_group') {
                        var cat_name;
                        if (selected_filters_info[chbox_filter_type][chbox_filter_category] === undefined) {
                            if (chbox_filter_type === 'attribute') {
                                cat_name = $('.extended_filters_category_attribute_' + chbox_filter_category).find('.cat-name').text();
                            }
                            else if (chbox_filter_type === 'attribute') {
                                cat_name = $('.extended_filters_category_attribute_group_' + chbox_filter_category).find('.cat-name').text();
                            }
                            else {
                                cat_name = $('.extended_filters_category_' + chbox_filter_category).find('.cat-name').text();
                            }
                            selected_filters_info[chbox_filter_type][chbox_filter_category] = { 'cat_name': cat_name, 'items': {} };
                        }
                        var label_el = el.closest('.ffield').find('label');
                        var string_val;
                        if (label_el.attr('data-name') !== undefined && label_el.attr('data-name') !== "") {
                            string_val = label_el.attr('data-name');
                        }
                        else {
                            string_val = label_el.text();
                        }
                        string_val = string_val.replace(/\n/g, '');
                        string_val = string_val.replace(/\t/g, '');
                        selected_filters_info[chbox_filter_type][chbox_filter_category]['items'][el.val()] = string_val;
                    }
                }
                else {
                    //                var selected_filter_span = $('.active-filters .filters-actions').find('span[data-id="'+el.val()+'"]');
                    //                selected_filter_span.remove();
                    var selected_filters_info = JSON.parse($('#selected_filters_json').html());
                    if (chbox_filter_type === 'manufacturer' || chbox_filter_type === 'product_category' || chbox_filter_type === 'availability') {
                        delete selected_filters_info[chbox_filter_type]['items'][el.val()];
                    }
                    else if (chbox_filter_type === 'attribute' || chbox_filter_type === 'extended') {
                        delete selected_filters_info[chbox_filter_type][chbox_filter_category]['items'][el.val()];
                        if ($.isEmptyObject(selected_filters_info[chbox_filter_type][chbox_filter_category]['items'])) {
                            delete selected_filters_info[chbox_filter_type][chbox_filter_category];
                        }
                    }
                }
                new_json_selected_filters = JSON.stringify(selected_filters_info);
                var new_json_el = document.getElementById('selected_filters_json');
                replaceHtml(new_json_el, new_json_selected_filters);
                obj_selected_filters = JSON.parse(new_json_selected_filters);
            }
        }
        if (obj_selected_filters === undefined) {
            var new_json_el = $('#selected_filters_json').html();
            obj_selected_filters = JSON.parse(new_json_el);
        }
        if ($('#paginationInfo').length > 0) {
            var x = JSON.parse($('#paginationInfo').html());
        }
        else {
            var x = { "p_1": "20000" };
        }
        products_start_index = 0;
        for (var i = 1; i < page_num; i++) {
            products_start_index = products_start_index + parseInt(x["p_" + i]);
        }
        countItemsPerPage = $('.chooseProductListingItemsPerPage').val();
        if ($(".price_from").val() !== undefined) {
            price_from = $(".price_from").val();
        }
        else {
            price_from = 0;
        }

        if ($(".price_to").val() !== undefined) {
            price_to = $(".price_to").val();
        }
        else {
            price_to = 10000000;
        }

        if ($(".price_min").val() !== undefined) {
            price_min = $(".price_min").val();
        }
        else {
            price_min = 0;
        }

        if ($(".price_max").val() !== undefined) {
            price_max = $(".price_max").val();
        }
        else {
            price_max = 10000000;
        }
    }
    listing_type = $('input[name="product_listing_type"]').val();
    var advanced_search_result_listing = '0';
    if ($('input[name="advanced_search_result_listing"]').length > 0) {
        var advanced_search_result_listing = '1';
    }
    var ajaxDataJson = { 'action': 'filter_products', 'categories_filters': categories_filters, 'manufacturers_filters': manufacturers_filters, 'availability_filters': availability_filters, 'attributes_filters': attributes_filters, 'extended_filters': extended_filters, 'attributes_groups_filters': attributes_groups_filters, 'listing_type': listing_type, 'countItemsPerPage': countItemsPerPage, 'page': page_num, 'products_start_index': products_start_index, 'listing_type': listing_type, 'sorting': sort, 'price_from': price_from, 'price_to': price_to, 'price_min': price_min, 'price_max': price_max, 'selected_filters_text': obj_selected_filters, 'clear_all_filters': clear_all_filters, 'advanced_search_result_listing': advanced_search_result_listing };
    if ($('input[name="special_exclude_roots_for_lenses"]').length > 0) {
        ajaxDataJson['special_exclude_roots_for_lenses'] = '1';
    }
    var ajax_data_json = JSON.parse($('#ajax_data').html());
    var ajaxDataJsonString = JSON.stringify(ajaxDataJson);
    ajax_data_json['data'].push(ajaxDataJsonString);
    var ajax_data_dom = document.getElementById('ajax_data');
    replaceHtml(ajax_data_dom, JSON.stringify(ajax_data_json));
    filterActionsAjax(el, chbox_filter_type, chbox_filter_category);
}
function showHideSelectedFilters(el) {
    var data_id = el.val();
    var categories_id = el.attr('data-filter-category');
    var chbox_filter_type = el.attr('data-filter-type');

    var label_el;
    var box_title;
    if (el.is(':checked')) {
        if (!$('.selected_category.togglefilter[data-id="' + data_id + '"][data-filter-type="' + chbox_filter_type + '"]').length) {
            label_el = el.parent().find('label');
            addSelectedElement(data_id, categories_id, chbox_filter_type, label_el);
        }
    }
    else {
        removeSelectedElement(data_id, categories_id, chbox_filter_type, label_el);
    }
}
function addSelectedElement(data_id, categories_id, chbox_filter_type, label_el) {
    var replace_label = false;
    if (typeof label_el === 'string') {
        var box_title = label_el;
        if (data_id === 'price_range') {
            if ($('.selected_category[data-id="price_range"]').length > 0) {
                replace_label = true;
            }
        }
    }
    else {
        var box_title = label_el.attr('data-name');
        if (box_title === undefined || box_title === '') {
            box_title = label_el.text();
        }
    }
    if (replace_label) {
        if (data_id === 'price_range') {
            if ($('.selected_category[data-id="price_range"]').length > 0) {
                $('.selected_category[data-id="price_range"]').html(label_el.toString());
            }
        }
    }
    else {
        $('.active-filters .filters-actions').append('<span data-id="' + data_id + '" data-category="' + categories_id + '" data-filter-type="' + chbox_filter_type + '" class="selected_category togglefilter">' + box_title + '</span>');
    }
    if (!$('.live-filters-wrapper').hasClass('show')) {
        $('.live-filters-wrapper').addClass('show');
    }
}
function removeSelectedElement(data_id, categories_id, chbox_filter_type, label_el) {
    if ($('.selected_category.togglefilter[data-id="' + data_id + '"][data-filter-type="' + chbox_filter_type + '"][data-category="' + categories_id + '"]').length) {
        $('.selected_category.togglefilter[data-id="' + data_id + '"][data-filter-type="' + chbox_filter_type + '"][data-category="' + categories_id + '"]').remove();
    }
    if (!($('.live-filters-wrapper .active-filters .filters-actions').find('.selected_category.togglefilter').length > 0)) {
        $('.live-filters-wrapper').removeClass('show');
    }
}
function countFiltersInCategory() {
    var count_local_active_filters = 0;
    $('.extended_filters_category').each(function () {
        var count_local_active_filters = $(this).find('input[type="checkbox"]:checked').length;
        if (count_local_active_filters > 0) {
            $(this).find('.active_filters_local_count').text('(' + count_local_active_filters + ')');
        }
        else {
            $(this).find('.active_filters_local_count').text('');
        }
    });
}

var ajax_on = true;
function filterActionsAjax(el, chbox_filter_type, chbox_filter_category) {
    var ajax_data_json = JSON.parse($('#ajax_data').html());
    var ajaxdata = JSON.parse(ajax_data_json['data'][0]);
    ajax_data_json['data'].shift();
    var ajaxDataJsonString = JSON.stringify(ajax_data_json);
    var ajax_data_dom = document.getElementById('ajax_data');
    replaceHtml(ajax_data_dom, ajaxDataJsonString);

    if ($('#hidden_filters_extended').length) {
        var hidden_filters_extended = JSON.parse($('#hidden_filters_extended').html());
        ajaxdata['hidden_filters_extended'] = hidden_filters_extended;
    }

    if ($('#hidden_filters_manufacturer').length) {
        var hidden_filters_manufacturer = JSON.parse($('#hidden_filters_manufacturer').html());
        ajaxdata['hidden_filters_manufacturer'] = hidden_filters_manufacturer;
    }
    if ($('#customer_group_id').length) {
        ajaxdata['customer_group_id'] = $('#customer_group_id').val();
    }
    /* console.log('ajaxdata');
    console.log(ajaxdata); */
    ajax_on = true;
    $.ajax({
        url: 'ajax_filters.php',
        type: 'post',
        //        async: false,
        data: ajaxdata,
        success: function (response) {
            /*console.log(response);*/
            if (ajax_on) {
                var obj = JSON.parse(response);

                if ($('.pagination').length) {
                    $('.pagination').remove();
                }
                $('.paginationFilterContainer').prepend(obj['pagination']);

                var products = document.getElementById('productboxwrapContainer');
                replaceHtml(products, obj['data']);
                lazyProductBox();
                var pageVal = $('#chooseProductListingPage').val();
                if (pageVal === '1') {
                    var read_url = window.location.href;
                    var url = new URL(read_url);
                    var search_params = url.searchParams;
                    if ($('#chooseProductListingItemsPerPage').val() !== 'view-all') {
                        search_params.delete('p');
                    }
                    url.search = search_params.toString();
                    var new_url = url.toString();
                    new_url = new_url.replace(/%2C/g, ",");
                    window.history.replaceState({ path: new_url }, '', new_url);
                }

                if ($('#productboxwrap').hasClass('hovered')) {
                    $('#productboxwrap').removeClass('hovered');
                }
                if ($('#products-in-listing').length && obj['products_counted'] !== undefined) {
                    $('#products-in-listing').text(obj['products_counted']);
                    $('.products-in-listing-container').show();
                }
                if ($('#chooseProductListingPage').length) {
                    var pagination_num = document.querySelector("#chooseProductListingPage").length
                    if (pagination_num > 1) {
                        $('#pages-in-listing').text(', ' + pagination_num);
                        $('#pages-in-listing').show();
                        $('.pages-description').show();
                    }
                    else {
                        $('#pages-in-listing').hide();
                        $('.pages-description').hide();
                    }
                }
                else {
                    $('#pages-in-listing').hide();
                    $('.pages-description').hide();
                }
                if (obj['show_all_filters'] === '1') {
                    clear_filter_manager();
                }
                else {
                    if (el !== undefined && el !== null && (chbox_filter_type !== undefined && chbox_filter_category !== undefined) || (el.hasClass('price_range_el'))) {
                        if (el.hasClass('filter_action') || el.hasClass('price_range_el')) {
                            filter_manager(obj['selected_filters'], obj['active_filters_array'], el, chbox_filter_type, chbox_filter_category);

                        }
                    }
                }
                removeLoaderProducts();
                if (obj['products_counted'] === 0) {
                    hideProductListingActions();
                }
                else {
                    showProductListingActions();
                    showPriceRange();
                }
                $('.ffield.css-checkbox-disabled').removeClass('css-checkbox-disabled');

                /* $('.css-checkbox.filter_action').removeClass('css-readonly'); */
                /* $('.css-checkbox.filter_action').removeAttr('readonly', 'readonly'); */

                ajax_on = false;

            }
        }
    });
}
function hideProductListingActions() {
    $('.filters_list_actions').hide();
}
function showProductListingActions() {
    $('.filters_list_actions').show();
}
function hidePriceRange() {
    $(".price_range").hide();
}
function showPriceRange() {
    $(".price_range").show();
}
function clearSelectedFilters() {
    $('.live-filters-wrapper .active-filters .filters-actions').html('');
    $('.live-filters-wrapper').removeClass('show');
}
function clear_filters(box) {
    var chbox_id_prefix;
    var filter_type = box.attr('data-filter-type');
    if (filter_type === 'manufacturer') {
        chbox_id_prefix = 'filter_manufacturer_' + box.attr('data-id');
    }
    if (filter_type === 'availability') {
        chbox_id_prefix = 'filter_availability_' + box.attr('data-id');
    }
    else if (filter_type === 'product_category') {
        chbox_id_prefix = 'filter_product_category_' + box.attr('data-id');
    }
    else if (filter_type === 'attribute') {
        chbox_id_prefix = 'filter_attribute_' + box.attr('data-id');
    }
    else if (filter_type === 'extended') {
        chbox_id_prefix = 'extended_filter_' + box.attr('data-id');
    }
    else if (filter_type === 'attribute_group') {
        chbox_id_prefix = 'filter_attribute_group_' + box.attr('data-id');
    }
    else if (filter_type === 'price_range') {
        clearPriceRange();
    }
    $('.' + chbox_id_prefix).prop('checked', false);
    $('.' + chbox_id_prefix).closest('.ffield').removeClass('checked');

    filterHandler($('.' + chbox_id_prefix));

}
function clearPriceRange() {
    if ($('.price_range').length) {
        $('.selected_category[data-id="price_range"]').remove();
        var from_string = $(".price_min").val().toString();
        var to_string = $(".price_max").val().toString();
        $(".range").each(function () {
            var slider = $(this).data("ionRangeSlider");
            slider.update({
                from: from_string,
                to: to_string
            });
        });
        handleUrlPriceRange();
    }
}
function filterHandler(el) {
    showHideSelectedFilters(el);
    handleUrlFiltersOnClick(el, el.attr('data-filter-type'), el.attr('data-filter-category'));
    filterActions(el);
}
function createClassReferenceFromAttributeClass(class_attribute) {
    class_attribute = class_attribute.replace(/ active-category/g, '');
    class_attribute = class_attribute.replace(/__replacementclass__/g, '');
    class_attribute = class_attribute.replace(/\s\s+/g, '.');
    class_attribute = class_attribute.replace(/\s/g, '.');
    if (class_attribute.charAt(0) !== '.') {
        class_attribute = '.' + class_attribute;
    }
    return class_attribute;
}
//var timeoutHandle;
//var timeoutHandleSuccess;
//var global_filter_el;
//var global_selected_data;
//var global_active_filters_data;
var maximum = 0;
var minimum = 10000000000;
var default_maximum = 0;
var default_minimum = 10000000000;
var rangeslider = null;

$(document).mouseup(function (e) {
    var container = $(".extended_filters_category");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('active-category');
    }
});

$(document).ready(function () {
    /**/
    $(document).on('click', '.selected_category', function () {
        clear_filters($(this));
    });
    $(document).on('click', '.sortListElement:not(.selected)', function () {
        var el_parent = $(this).closest('.filters-drop-container');
        $('.sortListElement').removeClass('selected');
        var el_class = createClassReferenceFromAttributeClass($(this).attr('class'));
        $(el_class).addClass('selected');
        $('#sort').val($(this).attr('data-id'));
        $('.extended_filters_category.sorting .cat-name').text($(this).text());
        $('.extended_filters_category.sorting').addClass('selected-filter-category');
        handleUrlSortProducts();
        filterActions($('#sort'));
    });
    $(document).on('click', '.chooseProductListingItemsPerPageListElement:not(.selected)', function () {
        var el_parent = $(this).closest('.filters-drop-container');
        var action_label = el_parent.find('.action-label');
        if (action_label !== undefined) {
            action_label.text($(this).text());
        }
        $('.chooseProductListingItemsPerPageListElement').removeClass('selected');
        $(this).addClass('selected');
        $('#chooseProductListingItemsPerPage').val($(this).attr('data-id'));
        $('.items-per-page .items-pp-label').text($(this).text());
        handleUrlPagination();
        filterActions($('#chooseProductListingItemsPerPage'));
    });
    $(document).on('click', '.chooseProductListingPageListElement:not(.selected)', function () {
        var el_parent = $(this).closest('.filters-drop-container');
        var action_label = el_parent.find('.action-label');
        if (action_label !== undefined) {
            action_label.text($(this).text());
        }
        $('.chooseProductListingPageListElement').removeClass('selected');
        $(this).addClass('selected');
        $('#chooseProductListingPage').val($(this).attr('data-id'));
        handleUrlPagination();
        filterActions($('#chooseProductListingPage'));
    });
    $(document).on('click', '.dots', function (e) {
        e.preventDefault();
        return false;
    });
    $(document).on('click', '.next_page', function () {
        var current_page = $('.chooseProductListingPageListElement.selected').attr('data-id');
        var next_page = parseInt(current_page) + 1;
        var el_parent = $(this).closest('.actions');
        var action_label = el_parent.find('.action-label');
        if (action_label !== undefined) {
            action_label.text($(this).text());
        }
        $('#chooseProductListingPage').val(next_page);
        handleUrlPagination();
        filterActions($('#chooseProductListingPage'));
    });
    $(document).on('click', '.previous_page', function () {
        var current_page = $('.chooseProductListingPageListElement.selected').attr('data-id');
        var previous_page = parseInt(current_page) - 1;
        var el_parent = $(this).closest('.actions');
        var action_label = el_parent.find('.action-label');
        if (action_label !== undefined) {
            action_label.text($(this).text());
        }
        $('#chooseProductListingPage').val(previous_page);
        handleUrlPagination();
        filterActions($('#chooseProductListingPage'));
    });
    $(document).click(function (e) {
        var target = $(e.target);
        // close dropdowns if click outside
        if (!target.hasClass('filters-drop-container') && !target.closest('.filters-drop-container').length) {
            $('.filter-drop-menu').removeClass('show');
            $('.filters-drop-container').removeClass('open');
        }
    });
    $(document).on('click', '.filters-drop-container', function () {
        if ($(this).hasClass("open")) {
            $(this).find('.filter-drop-menu').removeClass('show');
            $(this).removeClass('open');
        }
        else {
            $('.filter-drop-menu').removeClass('show');
            $('.filters-drop-container').removeClass('open');
            $(this).find('.filter-drop-menu').addClass('show');
            $(this).addClass('open');

        }
    });

    $(document).on('change', '.sort_listing', function () {
        $('.sort_listing').val($(this).val());
        handleUrlSortProducts();
        filterActions($(this));
    });
    $(document).on('change', '.chooseProductListingItemsPerPage', function () {
        $('.chooseProductListingItemsPerPage').val($(this).val());
        handleUrlPagination();
        filterActions($(this));
    });


    $(document).on('change', '.filter_action', function () {
        var el_class = createClassReferenceFromAttributeClass($(this).attr('class'));
        var el_container = $(this).closest('.extended_filter_field_container');
        var el_root_container_class = createClassReferenceFromAttributeClass(el_container.closest('.extended_filters_category').attr('class'));
        if ($(this).is(':checked')) {
            $(el_class).prop('checked', true);
        }
        else {
            $(el_class).prop('checked', false);
        }
        if (el_container.find('input:checked').length > 0) {
            $(el_root_container_class).addClass('selected-filter-category');
        }
        else {
            $(el_root_container_class).removeClass('selected-filter-category');
        }
        /* $('.css-checkbox.filter_action').addClass('css-readonly'); */
        $('.css-checkbox.filter_action').addClass('css-readonly'); 
        $('.extended_filter_field_container .ffield').addClass('css-checkbox-disabled');
        /* $('.css-checkbox.filter_action').attr('readonly', 'readonly'); */
        
        filterHandler($(this));
    });
    $(document).on('click', '.clear_all_filters', function () {
        $('.filter_action:checked').each(function () {
            $(this).prop('checked', false);
        });

        clearSelectedFilters();
        clearUrlParameters();
        clear_filter_manager();
        //        clearSelectedFilters();
        //        clearUrlParameters();
        //        clear_filter_manager();     
        //        clearPriceRange();
        //        $('.extended_filters_category').removeClass('selected-filter-category');
        //        filterActions($(this));
    });

    if ($('input[name="totalProductsMinprice"]').length) {
        if ($('input[name="totalProductsMinprice"]').val() !== undefined && $('input[name="totalProductsMinprice"]').val() !== '') {
            var value_min = parseFloat($('input[name="totalProductsMinprice"]').val());
            minimum = value_min;
        }
    }
    if ($('input[name="totalProductsMaxprice"]').length) {
        if ($('input[name="totalProductsMaxprice"]').val() !== undefined && $('input[name="totalProductsMaxprice"]').val() !== '') {
            var value_max = parseFloat($('input[name="totalProductsMaxprice"]').val());
            maximum = value_max;
        }
    }

    /*$('.extended_filter_field_container').each(function(){
        var field_container = $(this);
        var counter = 0;
        field_container.find('.ffield').each(function(){
            counter = counter + 1;            
        });
        if(counter === 1){
            field_container.find('.ffield').hide();
            field_container.closest('.extended_filters_category').hide();
        }
    });*/

    if ($('.filter-title.alone').length > 0 && $('.filter-subtitle.alone').length > 0) {
        $('.filter-title.alone').hide();
        $('.filter-subtitle.alone').hide();
    }
    if ($('.filter-title.action').length) {
        $('.filter-title.action').click(function () {
            var root_id = $(this).attr('data-root-id');
            $(this).toggleClass('closed');
            $('[data-root="' + root_id + '"]').slideToggle()
        });
    }
    //hide filters categories with no fields
    $('.extended_filters_category').each(function () {
        var fields = $(this).find('.ffield').length;
        if (fields === 0) {
            $(this).hide();
        }
    });

    $('.filterbox .toggle_filter_category').click(function () {
        var container = $(this).closest('.extended_filters_category');
        container.addClass('clicked');
        if (container.hasClass('active-category')) {
            $('.filterbox .extended_filters_category').removeClass('active-category');
        }
        else {
            container.addClass('active-category');
            $('.filterbox .extended_filters_category:not(.clicked)').removeClass('active-category');
        }
        container.removeClass('clicked');
    });

    $('.show-all-filters').click(function () {
        $('.filterbox .extended_filters_category').removeClass('active-category');
    });

    $('#filters').change(function () {
        window.location = $(this).val();
    });

    $('.togglefilters.hasfilter, .togglefilters_extra').click(function () {
        $('.filterbox').toggleClass('active');
        $(this).toggleClass('active');
        $('.close_filters.secondary_el').toggleClass('active');
        $('.buttons.secondary_el').toggleClass('active');
        $('.filterfixed').toggleClass('show');
        $('.selected_extended_filters').removeClass('active');
    });
    $('.close_filters').click(function () {
        $('.fa-window-close.close_filters.secondary_el').removeClass('active');
        $('.filterbox').removeClass('active');
        $('.togglefilters.hasfilter').removeClass('active');
        $('.togglefilters_extra').removeClass('active');
        $('.close_filters.secondary_el').removeClass('active');
        $('.buttons.secondary_el').removeClass('active');
        $('.filterfixed').removeClass('show');
        $('.extended_filters_category').each(function (index, element) {
        });
        $('.selected_extended_filters').removeClass('active');
    });

    $('.toggle_side_filters_action').click(function () {
        $('.filterfixed').toggleClass('show');
        $(this).find('i').toggle();

    });
    $('.footer .read-more-footer').click(function () {
        $('.footer .description p').css('height', '100%');
        $(this).hide();
        return false;
    });



    $(".extended_filters_header").click(function () {
        var state = $(this).children("div").hasClass("filters_plus");
        if (state == true) {
            $(this).children("div").addClass("filters_minus");
            $(this).find(".close").show();
            $(this).children("div").removeClass("filters_plus");
            $(this).find(".more").hide();
        } else {
            $(this).children("div").removeClass("filters_minus");
            $(this).find(".close").hide();
            $(this).children("div").addClass("filters_plus");
            $(this).find(".more").show();
        }
        $header = $(this);
        //getting the next element
        $content = $header.next();
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $content.slideToggle(500, function () {
            //execute this after slideToggle is done
            //change text of header based on visibility of content div
        });
    });

    //	$(document).on('click','.label_action',function () {
    //		clear_all_filters();
    //	});	

    $('.product_category_filter_action').change(function (e) {
        if ($('.product_category_filter_action').length) {
            if (!$('.selected_extended_filters').hasClass("flex")) {
                $('.selected_extended_filters').addClass("flex");
                $('.filtercontainer').addClass("flex");
            }
        }
        else {
            if ($('.selected_extended_filters').hasClass("flex")) {
                $('.selected_extended_filters').removeClass("flex");
                $('.filtercontainer').removeClass("flex");
            }
        }
        //    save_filters($(this).attr('id'), $(this).attr("data-filter-type"), $(this).closest('.extended_filters_category').attr("data-filters-category"));      
    });


    $('.manufacturer_filter_action').change(function (e) {
        if ($('.manufacturer_filter_action').length) {
            if (!$('.selected_extended_filters').hasClass("flex")) {
                $('.selected_extended_filters').addClass("flex");
                $('.filtercontainer').addClass("flex");
            }
        }
        else {
            if ($('.selected_extended_filters').hasClass("flex")) {
                $('.selected_extended_filters').removeClass("flex");
                $('.filtercontainer').removeClass("flex");
            }
        }
        //    save_filters($(this).attr('id'), $(this).attr("data-filter-type"), $(this).closest('.extended_filters_category').attr("data-filters-category"));      
    });

    $('.availability_filter_action').change(function (e) {
        if ($('.availability_filter_action').length) {
            if (!$('.selected_extended_filters').hasClass("flex")) {
                $('.selected_extended_filters').addClass("flex");
                $('.filtercontainer').addClass("flex");
            }
        }
        else {
            if ($('.selected_extended_filters').hasClass("flex")) {
                $('.selected_extended_filters').removeClass("flex");
                $('.filtercontainer').removeClass("flex");
            }
        }
        //    save_filters($(this).attr('id'), $(this).attr("data-filter-type"), $(this).closest('.extended_filters_category').attr("data-filters-category"));      
    });

    $('.attribute_filter_action').change(function (e) {

        if ($('.attribute_filter_action').length) {
            if (!$('.selected_extended_filters').hasClass("flex")) {
                $('.selected_extended_filters').addClass("flex");
                $('.filtercontainer').addClass("flex");
            }
        }
        else {
            if ($('.selected_extended_filters').hasClass("flex")) {
                $('.selected_extended_filters').removeClass("flex");
                $('.filtercontainer').removeClass("flex");
            }
        }
        //    save_filters($(this).attr('id'), $(this).attr("data-filter-type"), $(this).closest('.extended_filters_category').attr("data-filters-category"));      
    });

    $('.extended_filter_action').change(function (e) {
        if ($('.extended_filter_action').length) {
            if (!$('.selected_extended_filters').hasClass("flex")) {
                $('.selected_extended_filters').addClass("flex");
                $('.filtercontainer').addClass("flex");
            }
        }
        else {
            if ($('.selected_extended_filters').hasClass("flex")) {
                $('.selected_extended_filters').removeClass("flex");
                $('.filtercontainer').removeClass("flex");
            }
        }
        //    save_filters($(this).attr('id'), $(this).attr("data-filter-type"), $(this).closest('.extended_filters_category').attr("data-filters-category"));      
    });

    var minprice = 10000000000;
    var maxprice = 0;

    /*if ($('#productboxwrap').exists() && $('#productboxwrap > li').length<=1)
    {
        if (!$('.filterbox').parents().hasClass('specials')){
            $('.filterbox').hide();
            $('#pagination').hide();
        }
    }*/

    /*if (($('.price_from').exists() || $('.price_to').exists()) && $('#productboxwrap > li').length>1)
    {
        $('#productboxwrap > li').each(function(){	
           minprice = (parseInt(Math.floor($(this)[0].getAttribute('data-price'))) < minprice ? parseInt(Math.floor($(this)[0].getAttribute('data-price'))) : minprice);	
           maxprice = (parseInt(Math.ceil($(this)[0].getAttribute('data-price'))) > maxprice ? parseInt(Math.ceil($(this)[0].getAttribute('data-price'))) : maxprice);
           $('.price_from').val(minprice.toString());	
           $('.price_to').val(maxprice.toString());	
        });
    }*/
    $('.price_from,.price_to').bind("keydown", function (e) {
        // Allow: backspace, delete, tab, escape, enter
        if ($.inArray(e.keyCode, [8, 9, 27, 13, 46]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    if ($('.filterbox').length) {
        filter_manager_on_page_load();
        if ($('.productboxwrap').length === 0) {
            hideProductListingActions();
            hidePriceRange();
        }
    }
    if ($('.filter_action:checked').length > 0) {
        $('.filter_action:checked').first().prop('checked', true).trigger('change');
    }
    //	$('.price_from,.price_to').bind("keyup paste change", function (e) 
    //	{
    //        save_filters($(this).attr('id'), $(this).attr('id'), -1)
    //	});

});

function clear_all_filters() {
    $('.selected_extended_filters').addClass('start');
    $('.selected_extended_filters').removeClass('active');
    $('.filtercontainer').removeClass("flex");
    $('input[name="extended_filter[]"]:checked').click();
}