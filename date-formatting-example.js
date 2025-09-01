/**
 * Moment.js Date Formatting Example
 * 
 * This example demonstrates how to convert a date string to various formatted dates
 * using the Moment.js library. It includes parsing a specific date string and 
 * formatting it in multiple useful ways.
 * 
 * Author: Saroar Jahan
 * Date: September 2024
 */

// Import the Moment.js library
const moment = require('moment');

// The given date string to work with
const dateString = "Mon Sep 01 2025 00:00:00 GMT+0600 (Bangladesh Standard Time)";

console.log('=== Moment.js Date Formatting Example ===\n');

// Step 1: Parse the given date string
console.log('1. Original Date String:');
console.log(`   "${dateString}"`);

// Create a moment object from the date string
// Note: We first parse it as a JavaScript Date, then convert to moment
// This handles the complex timezone format more reliably
const jsDate = new Date(dateString);
const parsedDate = moment(jsDate);

// Verify that the date was parsed correctly
if (!parsedDate.isValid()) {
    console.error('Error: Invalid date string provided');
    process.exit(1);
}

console.log('\n2. Date Parsing Methods:');
console.log(`   JavaScript Date parsing: ${jsDate.toString()}`);
console.log(`   Moment object created: ${parsedDate.toString()}`);

// Alternative parsing methods for demonstration
console.log('\n   Alternative parsing methods:');
// If you know the exact format, you can specify it for more reliable parsing
const alternativeParsing1 = moment("2025-09-01 00:00:00 +0600", "YYYY-MM-DD HH:mm:ss ZZ");
console.log(`   From known format: ${alternativeParsing1.format('YYYY-MM-DD HH:mm:ss Z')}`);

// Parse from ISO string
const isoString = "2025-09-01T00:00:00+06:00";
const fromISO = moment(isoString);
console.log(`   From ISO string: ${fromISO.format('YYYY-MM-DD HH:mm:ss Z')}`);

// Use the original parsed date for the rest of the examples
// Convert to Bangladesh timezone for accurate representation
const bangladeshTime = moment(jsDate).utcOffset('+06:00');

// Step 2: Format to the requested "YYYY-MM-DD HH:MM:SS" format
console.log('\n3. Requested Format (YYYY-MM-DD HH:MM:SS):');
const requestedFormat = bangladeshTime.format('YYYY-MM-DD HH:mm:ss');
console.log(`   ${requestedFormat} (Bangladesh Time)`);
console.log(`   ${parsedDate.format('YYYY-MM-DD HH:mm:ss')} (UTC)`);

// Step 3: Additional useful date formatting examples
console.log('\n4. Additional Useful Date Formats:');

// Common date formats (using Bangladesh time for consistency with original)
console.log(`   ISO 8601 Format:           ${bangladeshTime.format()}`);
console.log(`   Short Date (MM/DD/YYYY):   ${bangladeshTime.format('MM/DD/YYYY')}`);
console.log(`   European Date (DD/MM/YYYY): ${bangladeshTime.format('DD/MM/YYYY')}`);
console.log(`   Long Date Format:          ${bangladeshTime.format('MMMM Do, YYYY')}`);
console.log(`   Date with Day Name:        ${bangladeshTime.format('dddd, MMMM Do, YYYY')}`);

// Time formats
console.log(`   12-Hour Time:              ${bangladeshTime.format('h:mm:ss A')}`);
console.log(`   24-Hour Time:              ${bangladeshTime.format('HH:mm:ss')}`);
console.log(`   Time with Timezone:        ${bangladeshTime.format('HH:mm:ss Z')}`);

// Combined date and time formats
console.log(`   RFC 2822 Format:           ${bangladeshTime.format('ddd, DD MMM YYYY HH:mm:ss ZZ')}`);
console.log(`   Custom Format:             ${bangladeshTime.format('YYYY/MM/DD - HH:mm')}`);
console.log(`   Timestamp (Unix):          ${bangladeshTime.unix()}`);
console.log(`   Timestamp (JavaScript):    ${bangladeshTime.valueOf()}`);

// Step 4: Relative time and manipulation examples
console.log('\n5. Date Manipulation and Relative Time:');

// Get current date for comparison
const now = moment();
console.log(`   Current Date:              ${now.format('YYYY-MM-DD HH:mm:ss')}`);

// Calculate difference
const diffInDays = bangladeshTime.diff(now, 'days');
console.log(`   Days from now:             ${diffInDays} days`);

// Relative time
console.log(`   Relative time:             ${bangladeshTime.fromNow()}`);

// Date arithmetic examples
const oneWeekLater = bangladeshTime.clone().add(1, 'week');
const oneMonthEarlier = bangladeshTime.clone().subtract(1, 'month');

console.log(`   One week later:            ${oneWeekLater.format('YYYY-MM-DD HH:mm:ss')}`);
console.log(`   One month earlier:         ${oneMonthEarlier.format('YYYY-MM-DD HH:mm:ss')}`);

// Step 5: Timezone handling
console.log('\n6. Timezone Information:');
console.log(`   UTC Offset:                ${bangladeshTime.format('ZZ')}`);
console.log(`   UTC Time:                  ${parsedDate.format('YYYY-MM-DD HH:mm:ss')} UTC`);
console.log(`   Bangladesh Time:           ${bangladeshTime.format('YYYY-MM-DD HH:mm:ss Z')}`);

// Step 6: Date component extraction
console.log('\n7. Date Component Extraction (Bangladesh Time):');
console.log(`   Year:                      ${bangladeshTime.year()}`);
console.log(`   Month (1-12):              ${bangladeshTime.month() + 1}`);
console.log(`   Month Name:                ${bangladeshTime.format('MMMM')}`);
console.log(`   Day of Month:              ${bangladeshTime.date()}`);
console.log(`   Day of Week (0-6):         ${bangladeshTime.day()}`);
console.log(`   Day Name:                  ${bangladeshTime.format('dddd')}`);
console.log(`   Hour (24h):                ${bangladeshTime.hour()}`);
console.log(`   Minute:                    ${bangladeshTime.minute()}`);
console.log(`   Second:                    ${bangladeshTime.second()}`);

console.log('\n=== Example Complete ===');
console.log('\nUseful Moment.js format tokens:');
console.log('  YYYY - 4 digit year');
console.log('  MM   - 2 digit month');
console.log('  DD   - 2 digit day');
console.log('  HH   - 24 hour format');
console.log('  mm   - minutes');
console.log('  ss   - seconds');
console.log('  A    - AM/PM');
console.log('  Z    - timezone offset');
console.log('  MMMM - full month name');
console.log('  dddd - full day name');
console.log('\nFor more formatting options, visit: https://momentjs.com/docs/#/displaying/format/');