function ipv6ToIpv4(ipv6) {
    // Check if the IPv6 address is an IPv4-mapped address
    if (ipv6.startsWith('::ffff:')) {
        // Extract the IPv4 part from the IPv6 address
        const ipv4Part = ipv6.split('::ffff:')[1];
        return ipv4Part;
    } else {
        throw new Error('The provided IPv6 address is not an IPv4-mapped address.');
    }
}

// Example usage:
try {
    const ipv6Address = '2409:40d6:f:806a:1821:254d:25d3:107c';
    const ipv4Address = ipv6ToIpv4(ipv6Address);
    console.log('Converted IPv4 Address:', ipv4Address);
} catch (error) {
    console.error(error.message);
}
